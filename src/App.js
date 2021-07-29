import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextLayout from './Context';
import { Suspense } from 'react';
import { Layout } from './components/layout';
import { NotFound } from './components/Notfoud';
import { Loading } from './components/loading';
import { Home } from './components/home';
import { Branding } from './components/branding';
import { Web } from './components/Web-design';
import { Photography } from './components/Photography';
import { App as AppComponent } from './components/App';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <ContextLayout.Consumer>
                    {
                        ({ error }) => <Layout error={error}>
                            <Suspense fallback={<Loading />} >
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path='/branding' component={Branding} />
                                    <Route exact path='/web-design' component={Web} />
                                    <Route exact path='/photography' component={Photography} />
                                    <Route exact path='/app' component={AppComponent} />
                                    <Route component={NotFound} />
                                </Switch>
                            </Suspense>
                        </Layout>
                    }
                </ContextLayout.Consumer>
            </Switch>
        </BrowserRouter>
    )
}
export default App