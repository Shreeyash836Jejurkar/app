import React from 'react';
import { data } from "./data (13)";
import './Data.css'

export const Data=()=>{
    return(
    <div className="Data-Display"> 
        {
            data.map((data,key)=>{
                return(<>
                    <p><b>UserId :</b> {data.userId} <b>Id :</b> {data.id}</p>
                    <p><b>Title :</b> {data.title}</p>
                    <p><b>Body :</b> {data.body}</p>
                    <hr class="solid"/>
                    </>
                );
            }
            )
        }
    </div>
    );
}



