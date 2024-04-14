import Card from "./Card";

function App() {
 let places = [
  {
    name: "world",
  },
  {
    name: "planet",
  },
  {
    name: "jupitar"
  }
 ];
 return (
  <div>
    
      {places.map((p, index) => {
        return <Card key={index} places={p.name} />
      })}
    
  </div>
 )
}
export default App
