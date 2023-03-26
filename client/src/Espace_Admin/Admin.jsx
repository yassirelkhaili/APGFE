import React from 'react'
import "../styles/StyleAdmin.css"
function Admin() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div class="container-fluid">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#" class="logo">
                        <span class="logosvg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="currentColor"
                                    d="M3.33 8L10 12l10-6l-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3l-2-1.2v-6l7 4.2l7-4.2v6L10 20z" />
                            </svg>
                        </span>
                        <span class="title logo_title">AGPFE</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm0 2q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-5v-6h-2v6H6Zm6-8.75Z" />
                            </svg>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="./user_management.html">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32c.44 0 .85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.482 2.482 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1Z" />
                            </svg>
                        </span>
                        <span class="title">Gestion Des Utilisateurs</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 256">
                                <path fill="currentColor"
                                    d="M92 144v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Zm36 4a4 4 0 0 0 4-4v-24a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4Zm32 0a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm52-72v104h12a4 4 0 0 1 0 8h-92v24.4a20 20 0 1 1-8 0V188H32a4 4 0 0 1 0-8h12V76h-4a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12Zm-84 144a12 12 0 1 0 12 12a12 12 0 0 0-12-12ZM40 68h176a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4Zm164 8H52v104h152Z" />
                            </svg>
                        </span>
                        <span class="title">Attribution Projets</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36">
                                <path fill="currentColor"
                                    d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z"
                                    class="clr-i-outline clr-i-outline-path-1" />
                                <path fill="currentColor" d="M8 14h2v2H8z" class="clr-i-outline clr-i-outline-path-2" />
                                <path fill="currentColor" d="M14 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-3" />
                                <path fill="currentColor" d="M20 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-4" />
                                <path fill="currentColor" d="M26 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-5" />
                                <path fill="currentColor" d="M8 19h2v2H8z" class="clr-i-outline clr-i-outline-path-6" />
                                <path fill="currentColor" d="M14 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-7" />
                                <path fill="currentColor" d="M20 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-8" />
                                <path fill="currentColor" d="M26 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-9" />
                                <path fill="currentColor" d="M8 24h2v2H8z" class="clr-i-outline clr-i-outline-path-10" />
                                <path fill="currentColor" d="M14 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-11" />
                                <path fill="currentColor" d="M20 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-12" />
                                <path fill="currentColor" d="M26 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-13" />
                                <path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                    class="clr-i-outline clr-i-outline-path-14" />
                                <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                    class="clr-i-outline clr-i-outline-path-15" />
                                <path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-16" />
                                <path fill="none" d="M0 0h36v36H0z" />
                            </svg>
                        </span>
                        <span class="title">Lance Date</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z" />
                            </svg>
                        </span>
                        <span class="title">Se Déconnecter</span>
                    </a>
                </li>
            </ul>
        </div>

        
        <div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div class="user">
                    <img src="assets/imgs/zikoTransparent.png" alt=""/>
                </div>
            </div>

           
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">150</div>
                        <div class="cardName">Utilisateur Totale</div>
                    </div>

                    <div class="iconBx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9V20Z" />
                        </svg>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">120</div>
                        <div class="cardName">Etudient</div>
                    </div>

                    <div class="iconBx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="m227.79 52.62l-96-32a11.85 11.85 0 0 0-7.58 0l-96 32A12 12 0 0 0 20 63.37a6.05 6.05 0 0 0 0 .63v80a12 12 0 0 0 24 0V80.65l23.71 7.9a67.92 67.92 0 0 0 18.42 85A100.36 100.36 0 0 0 46 209.44a12 12 0 1 0 20.1 13.11C80.37 200.59 103 188 128 188s47.63 12.59 61.95 34.55a12 12 0 1 0 20.1-13.11a100.36 100.36 0 0 0-40.18-35.92a67.92 67.92 0 0 0 18.42-85l39.5-13.17a12 12 0 0 0 0-22.76Zm-99.79-8L186.05 64L128 83.35L70 64ZM172 120a44 44 0 1 1-81.06-23.71l33.27 11.09a11.89 11.89 0 0 0 7.58 0l33.27-11.09A43.85 43.85 0 0 1 172 120Z" />
                        </svg>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">22</div>
                        <div class="cardName">Encadrant</div>
                    </div>

                    <div class="iconBx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2c0-1.11-.89-2-2-2c-1.11 0-2.01.89-2 2c0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11c.07 0 .15.01.23.01c.24-.64.67-1.29 1.3-1.86A9.05 9.05 0 0 0 9.5 14c-1.3 0-3.39.45-4.73 1.43c-.5-1.04-.78-2.2-.78-3.43c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37c-1-.59-2.36-.87-3.24-.87c-1.52 0-4.5.81-4.5 2.7v2.78a7.935 7.935 0 0 1-5.66-2.86z" />
                        </svg>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">8</div>
                        <div class="cardName">Jury</div>
                    </div>

                    <div class="iconBx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75zM9.1 17H7v-2.14l5.96-5.96l2.12 2.12L9.1 17zm7.75-7.73l-1.06 1.06l-2.12-2.12l1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71z" />
                        </svg>
                    </div>
                </div>
            </div>

            
            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Projects Récents</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Étudiant (Binôme)</td>
                                <td>Project</td>
                                <td>Encadrant</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Imane Tarfi | Zakaria Ghazoune</td>
                                <td>AGPFE</td>
                                <td>Ms.Zakaria</td>
                                <td><span class="status pending">En attente</span></td>
                            </tr>
                            <tr>
                                <td>Addidas Shoes | Zakaria Ghz</td>
                                <td>Project Name</td>
                                <td>Ms.Dolas</td>
                                <td><span class="status inProgress">En cours</span></td>
                            </tr>
                            <tr>
                                <td>Dola Soka | Imane Tarfi</td>
                                <td>Project Name</td>
                                <td>Ms.Dolas</td>
                                <td><span class="status pending">En attente</span></td>
                            </tr>
                            <tr>
                                <td>Imane Tarfi</td>
                                <td>Project Name</td>
                                <td>Miss.Imane</td>
                                <td><span class="status delivered">Livré</span></td>
                            </tr>

                            <tr>
                                <td>Imane Tarfi</td>
                                <td>Project Name</td>
                                <td>Ms.Zakaria</td>
                                <td><span class="status pending">En attente</span></td>
                            </tr>

                            <tr>
                                <td>Imane Tarfi</td>
                                <td>Project Name</td>
                                <td>Miss.Imane</td>
                                <td><span class="status return">Rappel</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>Project Name</td>
                                <td>Ms.Zakaria</td>
                                <td><span class="status inProgress">En cours</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>Project Name</td>
                                <td>Miss.Imane</td>
                                <td><span class="status delivered">Livré</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>Project Name</td>
                                <td>Ms.Zakaria</td>
                                <td><span class="status pending">En attente</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>Project Name</td>
                                <td>Miss.Imane</td>
                                <td><span class="status return">Rappel</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>Project Name</td>
                                <td>Ms.Zakaria</td>
                                <td><span class="status inProgress">En cours</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

               
                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Utilisateurs Récents</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Étudiant</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>Encadrant</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Étudiant</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>Étudiant</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/zikoTransparent.png" alt=""/></div>
                            </td>
                            <td>
                                <h4>Zackaria <br/> <span>Jury</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>Encadrant</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer01.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="assets/imgs/customer02.jpg" alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>Étudiant</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            
            <div class="footer">
                <p class="footer-parag">
                    <placeholder data-i18n="footer">Tous Droits Réservés</placeholder> &copy;
                    <a href="#" class="footer-link">AGPFE</a>
                    <span class="this-year">{year}</span>
                </p>
            </div>
   
</div>
</div>
  )
}

export default Admin
