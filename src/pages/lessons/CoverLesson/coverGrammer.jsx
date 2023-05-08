import React from "react";
import Grammer from "../Single/grammer/index";
import Vocabulary from "../Single/grammer/index";
export default function CoverGrammer({}) {

    return (
    <div style={{
        marginTop: '75px',
        marginLeft: '10%',
        marginRight: '10%',
        // marginBottom:'100px',
        alignContent: 'center', display: 'flex',
        backgroundColor: "#27511132",
        justifyContent: 'center'
      }}><Grammer></Grammer></div>
      );
}