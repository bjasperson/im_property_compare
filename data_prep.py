import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def extract_data():
    c44_result = requests.post("https://query.openkim.org/api",data={'database': 'data', 'query': '{"property-id":"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt",\r\n"meta.runner.driver.short-id":"TD_011862047401_006",\r\n"short-name.source-value":"fcc"}', 'fields': '{"c44.source-value":1, "meta.subject.kimcode":1,\r\n"species.source-value":1,\r\n"short-name.source-value":1}', 'flat': 'on'}).json()
    se_result = requests.post("https://query.openkim.org/api",data={'query': '{"property-id":"tag:staff@noreply.openkim.org,2014-05-21:property/surface-energy-cubic-crystal-npt",\r\n"meta.runner.driver.short-id":"TD_955413365818_004",\r\n"short-name.source-value":"fcc"}', 'fields': '{"surface-energy.source-value":1,\r\n"meta.subject.kimcode":1,\r\n"species.source-value":1,\r\n"short-name.source-value":1,\r\n"miller-indices.source-value":1}', 'database': 'data', 'flat': 'on'}).json()

    df_c44 = pd.DataFrame({'species':[i['species.source-value'][0] for i in c44_result],
                        'model':[i['meta.subject.kimcode'] for i in c44_result],
                        'structure':[i['short-name.source-value'][0] for i in c44_result],
                        'c44_fcc':[i['c44.source-value'] for i in c44_result]})

    df_surface_energy = pd.DataFrame({'species':[i['species.source-value'][0] for i in se_result],
                        'model':[i['meta.subject.kimcode'] for i in se_result],
                        'structure':[i['short-name.source-value'][0] for i in se_result],
                        'miller_indices':[i['miller-indices.source-value'] for i in se_result],
                        'surface_energy_110_fcc':[i['surface-energy.source-value'] for i in se_result]})

    df = pd.merge(df_c44, df_surface_energy, on=['model','species','structure'])
    df['model_type'] = [i.split("__")[0].split("_")[:-3] for i in df['model']]

    # remove known bad data
    df = df[df['species'] != "user01"]
    df = df[df['model_type'] != "['Morse', 'SigmoidalSmoothed']"]
    return df


def add_averages(df_orig):
    #df_orig = pd.read_csv("./data.csv")
    #df_orig = df_orig[df_orig['species'] != "user01"]
    #df_orig = df_orig[df_orig['model_type'] != "['Morse', 'SigmoidalSmoothed']"]
    df = df_orig.copy()
    df = calc_mean(df)

    name = "LJ_ElliottAkerson_2015_Universal__MO_959249795837_003"
    df_updated = df_orig.copy()
    df_updated = df_updated[df_updated['model'] != name]
    df_updated = calc_mean(df_updated)

    return df, df_updated

def calc_mean(df):
    df_mean = df.groupby(['species'])[['c44_fcc','surface_energy_110_fcc']].mean().copy()
    df_mean = df_mean.rename({'c44_fcc':'c44_fcc_avg',
                              'surface_energy_110_fcc':'surface_energy_110_fcc_avg'},
                              axis=1)
    df = df.merge(df_mean,'left',on='species')
    return df

def merge_dfs():


    return

def plot(x,y):
    plt.scatter(x,y)
    plt.show()


def main():
    df = extract_data()
    df, df_updated = add_averages(df)

    sns.relplot(data = df,
                x = 'surface_energy_110_fcc_avg',
                y = 'c44_fcc_avg',
                hue = 'species')
    plt.show()

    sns.relplot(data = df,
                x = 'surface_energy_110_fcc',
                y = 'c44_fcc',
                hue = 'species')
    plt.show()
    
    sns.relplot(data = df_updated,
            x = 'surface_energy_110_fcc_avg',
            y = 'c44_fcc_avg',
            hue = 'species')
    plt.show()

    sns.relplot(data = df_updated,
        x = 'surface_energy_110_fcc',
        y = 'c44_fcc',
        hue = 'species')
    plt.show()

    df.to_csv("./data.csv")
    df_updated.to_csv("./data_filtered.csv")

    return


if __name__ == "__main__":
    main()