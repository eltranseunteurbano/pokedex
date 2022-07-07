import { Text, View, StyleSheet } from "react-native";

const Stats = (props) => {
  const { stats } = props;

  const barStyles = (num) => {
    let bgColorized;

    if (num <= 25) {
      bgColorized = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      bgColorized = "#F08700";
    } else if (num >= 50 && num < 75) {
      bgColorized = "#EFCA08";
    } else if (num >= 75) {
      bgColorized = "#6EEB83";
    }
    return {
      backgroundColor: bgColorized,
      width: `${num > 100 ? 100 : num}%`,
    };
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Base Stats</Text>
      <View>
        {stats.map(({ base_stat, stat: { name, url } }) => {
          return (
            <View key={url} style={styles.item}>
              <Text style={styles.statTitle}>{name}</Text>
              <View style={styles.statContent}>
                <Text style={styles.statBaseStat}>{base_stat}%</Text>
                <View style={styles.statProgressBox}>
                  <View
                    style={{
                      ...styles.statProgressBar,
                      ...barStyles(base_stat),
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statTitle: {
    width: "30%",
    textTransform: "capitalize",
    color: "#6b6b6b",
    fontSize: 12,
  },
  statContent: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  statBaseStat: {
    width: "16%",
    fontSize: 12,
    textAlign: "right",
    paddingRight: 6,
  },
  statProgressBox: {
    width: "84%",
    height: 6,
    backgroundColor: "#dedede",
    overflow: "hidden",
    borderRadius: 4,
  },
  statProgressBar: {
    width: "70%",
    height: "100%",
    borderRadius: 4,
  },
});

export default Stats;
