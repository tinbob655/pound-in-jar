import React, {Component} from 'react';
import SinglePersonCell from './singlePersonCell.jsx';

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    The jarinator
                </h1>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <SinglePersonCell person='Ben' />
                            </td>
                            <td>
                                <SinglePersonCell person='Joel' />
                            </td>
                            <td>
                                <SinglePersonCell person='Michael' />
                            </td>
                            <td>
                                <SinglePersonCell person='Will T' />
                            </td>
                            <td>
                                <SinglePersonCell person='Will R' />
                            </td>
                        </tr>
                    </thead>
                </table>

                <p>
                    If u spam click a button and it breaks ur liable (Michael)
                </p>
            </React.Fragment>
        );
    };
};

export default Main;