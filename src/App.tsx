import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        blanditiis voluptatem fugit tempora doloribus iure enim aperiam,
        quibusdam, alias molestiae quidem distinctio animi aut earum minima
        perspiciatis! Sapiente ipsam consectetur delectus? Doloremque quasi
        fugit voluptatum recusandae temporibus? Deserunt debitis, doloremque
        officia quasi laudantium accusamus cupiditate sit consequuntur! Harum
        accusamus culpa quas temporibus et voluptatum rerum necessitatibus cum
        natus sed aut dolor laborum iusto odio, placeat maxime neque dolorem
        illum nulla doloribus exercitationem. Tempore voluptas nostrum officiis?
        A, illo provident, aperiam eligendi temporibus commodi et repellendus
        nostrum nobis facilis sapiente enim quaerat labore itaque aspernatur
        beatae modi quod inventore corporis illum!
      </ExpandableText>
    </>
  );
}

export default App;

// Second exervise under function
// const [cart, setCart] = useState({
//   discount: 0.1,
//   items: [
//     { id: 1, title: 'Product 1', quantity: 1},
//     { id: 2, title: 'Product 2', quantity: 2}
//   ]
// });

// const handleClick = () => {
//   setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: 2} : item)})
// }

// Second Exercise under return
// <!-- <ul>
// {cart.items.map(item => (
//   <li>{item.title} {item.quantity}</li>
// ))}
// </ul>
// <button onClick={handleClick}>Change</button> -->

// Final module - under function
// const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

// Final module - under return
// <NavBar cartItemsCount={cartItems.length} />
// <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>

// under Function section not return
// const [bugs, setBugs] = useState([
//   { id: 1, title: "Bug 1", fixed: false },
//   { id: 2, title: "Bug 2", fixed: false },
// ]);

// const handleClick = () => {
//   // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
//   setBugs(
//     produce((draft) => {
//       const bug = draft.find((bug) => bug.id === 1);
//       if (bug) bug.fixed = true;
//     })
//   );
// };

//   const [tags, setTags] = useState(['happy', 'cheerful']);

//   const handleClick = () => {
//     // Add
//     setTags([...tags, 'exciting']);
//     // Remove
//     setTags(tags.filter(tag => tag !== 'happy'));
//     // Update
//     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
//   }
// };
// const [customer, setCustomer] = useState({
//   name: "John",
//   address: {
//     city: "San Francisco",
//     zipCode: 94111,
//   },
// });

// const handleClick = () => {
//   setCustomer({
//     ...customer,
//     address: { ...customer.address, zipCode: 60126 },
//   });
// };

// const [drink, setDrink] = useState ({
//   title: "Americano",
//   price: 5
// });

// const handleClick = () => {
//   setDrink({...drink, price: 6})
// }

// const [person, setPerson] = useState({
//   firstName: '',
//   lastName: ''
// });
// const [isLoading, setLoading] = useState(false);
