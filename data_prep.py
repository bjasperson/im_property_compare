import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def main():
    df_orig = pd.read_csv("./data.csv")
    df_orig = df_orig[df_orig['species'] != "user01"]
    df_orig = df_orig[df_orig['model_type'] != "['Morse', 'SigmoidalSmoothed']"]
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

def plot(x,y):
    plt.scatter(x,y)
    plt.show()


if __name__ == "__main__":
    df, df_updated = main()

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