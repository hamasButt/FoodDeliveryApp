import "./app.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import {MiddleContentCont} from "./components/middle-content/MiddleContentCont";
import {FooterMenu} from "./components/footer/FooterMenu";
import {SignUp} from "./components/auth/SignUp";
import {Login} from "./components/auth/Login";
import {ProtectedRoute} from "./components/auth/ProtectedRoute";

const App = () => {

    return (
        <div className="app">

            <Router>
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <Header/>
                                    <MiddleContentCont/>
                                    <FooterMenu/>
                                </>
                            }
                        />
                    </Route>
                    <Route path='*' exact element={<h1>No ROUTE FOUND</h1>}/>
                </Routes>
            </Router>
        </div>
    );
};
export default App;
