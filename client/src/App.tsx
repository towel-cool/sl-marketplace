import { BrowserRouter, Routes, Route} from "react-router-dom"
import  { Navbar } from "./components/Navbar"
import { Shop } from "./pages/Shop"
import { ProductPage } from "./pages/ProductPage"
import { CartPage } from "./pages/CartPage"
import { Footer } from "./components/Footer"
import { CartProvider } from "./context/CartProvider"

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
   )
}

export default App
