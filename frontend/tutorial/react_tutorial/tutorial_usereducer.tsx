"use client"
import React, { useReducer } from 'react';
import BUTTON_CLICK from "../../src/ui/components/button/button_click"
import * as a from "../../src/ui/type/alias";
import * as u from '../../src/ui/utility/utility';

function abs_nozero(input:number){
    if(input < 0){
        return Math.round((-1) * input) + 1
    }
    else{
        return Math.round(input) + 1
    }
}

type date_t = {
    day: number,
    month:number,
    year:number
}

type time_machine_t = {
    unit:"day"|"month"|"year"|"reset",
    size:number
}

function func_update_day(day:number, month:number,time:number,round:number){
    day += time
    if(day >= abs_nozero(round)){
        day = day % abs_nozero(round)
        month += 1
    }
    return {day:day,month:month}
}

function func_update_time(time:date_t, size:number, unit:"day"|"month"|"year"|"reset"){
    if(unit === "year"){
        time.year += size
        return time
    }
    else if (unit === "month"){
        const CONST_size = func_update_day(time.month, time.year, size, 11)
        time.month = CONST_size.day
        time.year = CONST_size.month
        return time
    }
    else if (unit === "day"){
        const DAY = time.day
        const CONST_NEXT_DAY = func_update_day(time.day, 0, size, 29)
        time.day = CONST_NEXT_DAY.day
        if(DAY + size > 29){
            const CONST_size = func_update_day(time.month, time.year, 1, 11)
            time.month = CONST_size.day
            time.year = CONST_size.month
        }
        return time
    }
    else{
        return {
            day:0,
            month:0,
            year:0
        }
    }
}

function reducer_today(ss_today: date_t, action: time_machine_t) {
    const YOU_CANT_MODIFY_THE_HOOK_DIRECTLY = u.copy_obj(ss_today)
    return func_update_time(
        YOU_CANT_MODIFY_THE_HOOK_DIRECTLY, 
        action.size, 
        action.unit)
}

export default function TUTORIAL_USEREDUCER() {
  const [ss_today, setss_today] = useReducer(reducer_today, {day:0, month:0, year:0} as date_t);

  return (
    <>
        <p>Today is {ss_today.day+1}/ {ss_today.month+1}/ {ss_today.year}</p>
        <BUTTON_CLICK 
            name={"next episode" as a.name} 
            func_event={(()=>{setss_today({unit:"day", size:1})}) as a.func_event}
        />
        <BUTTON_CLICK 
            name={"next season" as a.name} 
            func_event={(()=>{setss_today({unit:"month", size:1})}) as a.func_event}
        />
        <BUTTON_CLICK 
            name={"happy new year" as a.name} 
            func_event={(()=>{setss_today({unit:"year", size:1})}) as a.func_event}
        />
        <BUTTON_CLICK
            name={"pivot chapter" as a.name}
            func_event={(()=>{setss_today({unit:"reset", size:1})}) as a.func_event}
            />
    </>
  );
}

// https://react.dev/reference/react/useReducer
