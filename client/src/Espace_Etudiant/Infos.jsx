import React from 'react'
import "../styles/StyleEtudt.css"
function Infos() {
  return (
    <div class="encad">
        <div class="container">
            <div class="plceHolcontainer">
                <form action="#" method="get">
                    <div class="encardiv">
                        <label>Encadrant: </label>
                        <input type="text"/><br/>
                    </div>
                    <div class="datpsgcon">
                        <label>Date De Passage: </label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Infos
