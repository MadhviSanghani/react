import * as React from "react";

class Timetable extends React.Component{
    render() {
        return(
            <div>
                <center>
                <table border={1}>
                    <tbody style={{textAlign:'center', height:'700px'}}>
                        <tr>
                            <td></td>
                            <td>Monday</td>
                            <td>Tuesday</td>
                            <td>Wednesday</td>
                            <td>Thrusday</td>
                            <td>Friday</td>
                        </tr>
                        <tr>
                            <td>8:00 to 8:55</td>
                            <td>React(NV)</td>
                            <td>AI/ML(CP)</td>
                            <td>AL/ML(CP)</td>
                            <td>React(SMS)</td>
                            <td>TOC(AKK)</td>
                        </tr>
                        <tr>
                            <td>8:55 to 9:45</td>
                            <td>React(NV)</td>
                            <td>TOC(AKK)</td>
                            <td>AL/ML(CP)</td>
                            <td>React(SMS)</td>
                            <td>TOC(AKK)</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>LL1</td>
                            <td>LL6</td>
                            <td>LL1</td>
                            <td>LL1</td>
                            <td>201</td>
                        </tr>
                        <tr>
                            <td>9:45 to 10:00</td>
                            <td colSpan={5}>Tea Break</td>
                        </tr>

                        <tr>
                            <td>10:00 to 10:50</td>
                            <td>.NET(PJT)/ <br />ADV. JAVA(NC)</td>
                            <td>.NET(BD)/ <br />ADV. JAVA(NC)</td>
                            <td rowSpan={2}>PD(DS) / DM(Lib) / EC(Lib)</td>
                            <td>PD(DS) / DM(Lib) / EC(Lib)</td>
                            <td rowSpan={2}>.NET(BD)/ <br />ADV. JAVA(Lib)</td>
                        </tr>
                        <tr>
                            <td>10:50 to 11:40</td>
                            <td>.NET(PJT)/ <br />ADV. JAVA(NC)</td>
                            <td>.NET(BD)/ <br />ADV. JAVA(NC)</td>
                            <td>PD(DS) / DM(Lib) / EC(Lib)</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>LL1 / LL5</td>
                            <td>LL1/LL5</td>
                            <td>118</td>
                            <td>118</td>
                            <td>LL4</td>
                        </tr>
                        <tr>
                            <td>11:40 to 12:30</td>
                            <td colSpan={5}>Lunch Break</td>
                        </tr>

                        <tr>
                            <td>12:30 to 1:20</td>
                            <td rowSpan={2}>PD(Lib) / DM(OD) / EC(RK)</td>
                            <td rowSpan={2}>React(NV)</td>
                            <td >PD(Lib) / DM(OD) / EC(RK)</td>
                            <td rowSpan={2}>AI / ML <br /> (CP)</td>
                            <td rowSpan={2}>ADV. JAVA(MV)<br />.NET (Lib)</td>
                        </tr>
                        <tr>
                            <td>1:20 to 2:10</td>
                            <td>PD(Lib) / DM(OD) / EC(RK)</td>
                        </tr>
                        <tr>
                            <td>Class/Lab Location</td>
                            <td>214 / Elec. Machine Lab</td>
                            <td>LL5</td>
                            <td>214 / Elec. Machine Lab</td>
                            <td>LL5</td>
                            <td>LL5</td>
                        </tr>
                    </tbody>
                </table>
                </center>
            </div>
        );
    }
}
export default Timetable;