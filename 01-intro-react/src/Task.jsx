export function TaskCard(props) {
  const cardStyle = {
    background: "#202020",
    color: "#fff",
    padding: "20px",
  };

  return (
    <div style={cardStyle}>
      <h1 style={{ fontWeight: "Arial" }}>Mi primer tarea</h1>
      <span>
      {props.ready ? 'Tarea realizada' : 'Tarea pendiente'}
      </span>    
    </div>
  );
}
