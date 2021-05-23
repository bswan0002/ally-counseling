export default function HeaderButton({ isExpanded, setIsExpanded }) {
  const styles = {
    container: {
      height: "50px",
      width: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      padding: "0px",
      marginTop: "8px",
      marginRight: "4px",
    },
    line: {
      height: "2px",
      width: "20px",
      background: "black",
      transition: "all 0.2s ease",
    },
    lineTop: {
      transform: isExpanded ? "rotate(45deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px",
    },
    lineMiddle: {
      opacity: isExpanded ? 0 : 1,
      transform: isExpanded ? "translateX(-16px)" : "none",
    },
    lineBottom: {
      transform: isExpanded ? "translateX(-1px) rotate(-45deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px",
    },
  };

  return (
    <div
      style={styles.container}
      onClick={
        isExpanded ? () => setIsExpanded(false) : () => setIsExpanded(true)
      }
    >
      <div style={{ ...styles.line, ...styles.lineTop }} />
      <div style={{ ...styles.line, ...styles.lineMiddle }} />
      <div style={{ ...styles.line, ...styles.lineBottom }} />
    </div>
  );
}
