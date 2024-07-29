import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BackgroundColorChanger from "./components/backgroundColorChanger/BackgroundColorChanger";
import CurrencyConverter from "./components/currencyConverter/CurrencyConverter";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator";
import Page from "./components/reactRouter/Page";
import Footer from "./components/reactRouter/Footer";
import NavBar from "./components/reactRouter/NavBar";
import About from "./components/reactRouter/About";
import Contact from "./components/reactRouter/Contact";
import Github from "./components/reactRouter/Github";
import Body from "./components/reactRouter/Body";
import Login from "./components/reactRouter/Login";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Page />,
            children: [
                {
                    path: "",
                    element: <Body />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "github",
                    element: <Github />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
            {/*
                <BackgroundColorChanger />
                <PasswordGenerator />
                <CurrencyConverter />
                <HomePage />
            */}
        </>
    );
}

export default App;
