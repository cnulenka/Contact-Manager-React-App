import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  
  const contacts = [
    {
      id: "1",
      name: "Jarvis",
      email: "jarvis@jarvis.com"
    },
    {
      id: "2",
      name: "Friday",
      email: "friday@friday.com"
    }
  ]

  return (
    <div className="ui container">
    <Header />
    <AddContact />
    <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
