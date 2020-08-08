import React, { useEffect,useRef  } from 'react';
import styled from '@emotion/styled';
import { fromEvent } from 'rxjs';
import {map,tap} from 'rxjs/operators';

const ProgressBarContainer=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    width:0%;
    background-color: #9034AA;
`;

const ProgressBar=()=>{
    const progressBar = useRef(null);

    useEffect(()=>{
        const eventProgress$=fromEvent(document,'scroll').pipe(
            map(calcPercentScrollBar),
            /* tap(console.log) */
        ).subscribe((resp)=>{
            progressBar.current.style.width=`${resp}%`;
        });
        return ()=>{
            eventProgress$.unsubscribe()
        }
    },[]);

    
const calcPercentScrollBar=(event)=>{
    const {target:{documentElement:{clientHeight,scrollHeight,scrollTop}}} =event;
    return (scrollTop/(scrollHeight-clientHeight))*100;
}

    return(
        <>
        <ProgressBarContainer ref={progressBar}/>
        </>
    )

}

export default ProgressBar;