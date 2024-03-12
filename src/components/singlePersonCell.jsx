import React, {useCallback, useState, useEffect} from 'react';
import {getFirestore, getDoc, doc, setDoc} from 'firebase/firestore';

export default function SinglePersonCell({person}) {

    const [score, setScore] = useState(0);

    const getScores = useCallback( async() => {

        //get data from firestore
        const db = getFirestore();
        const docRef = doc(db, 'scores', person);
        const docSnap = await getDoc(docRef);

        setScore(docSnap.data().value);
    }, [person]);

    useEffect(() => {
        getScores();
    }, [getScores]);

    return (
        <React.Fragment>
            <div className="singlePersonWrapper">
                <h2>
                    {person}
                </h2>

                {/*increase score button*/}
                <button type="button" onClick={() => {
                    setScore(score + 1)
                    const db = getFirestore();
                    setDoc(doc(db, 'scores', person), {
                        value: score + 1,
                    });
                    }}>
                    <h3 className="buttonArrow">
                        ⇧
                    </h3>
                </button>

                <p>
                    {score}
                </p>

                {/*decrease score button*/}
                <button type="button" onClick={() => {
                    setScore(score - 1);
                    const db = getFirestore();
                    setDoc(doc(db, 'scores', person), {
                        value: score - 1,
                    });
                    }}>
                    <h3 className="buttonArrow">
                        ⇩
                    </h3>
                </button>
            </div>
        </React.Fragment>
    );
};