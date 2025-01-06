import * as React from 'react';

class Timetable extends React.Component{
    render(){
        return (
            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <tr style={{ textAlign: "center" }}>RK University</tr>
                            <tr style={{ textAlign: "center" }}>School of Engineering</tr>
                            <tr style={{ textAlign: "center" }}>6CEB+ITA</tr>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <tr>
                                <td></td>
                                <td style={{ textAlign: "center" }}>Monday</td>
                                <td style={{ textAlign: "center" }}>Tuesday</td>
                                <td style={{ textAlign: "center" }}>Wednesday</td>
                                <td style={{ textAlign: "center" }}>Thursday</td>
                                <td style={{ textAlign: "center" }}>Friday</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>08:00 To 8:55</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>React(NV)</td>
                                <td style={{ textAlign: "center" }}>AI/ML(CP)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>AI/ML(CP)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>React(SMS)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>TOC(AKK)</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>08:55 To 9:45</td>
                                <td style={{ textAlign: "center" }}>TOC(AKK)</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>Class/Lab location</td>
                                <td style={{ textAlign: "center" }}>LL1</td>
                                <td style={{ textAlign: "center" }}>LL6</td>
                                <td style={{ textAlign: "center" }}>LL1</td>
                                <td style={{ textAlign: "center" }}>LL1</td>
                                <td style={{ textAlign: "center" }}>201</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>9:45 To 10:00</td>
                                <td colSpan={5} style={{ textAlign: "center" }}>TEA BREAK</td>
                            </tr>
                            <tr>
                                <td rowSpan={2} style={{ textAlign: "center" }}>10:00 To 11:40</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>.Net(PJT)/ADV.Java(NC)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>.Net(BD)/ADV.Java(NC)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(DS) / DM(Lib)/EC(Lib)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(DS) / DM(Lib)/EC(Lib)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>.Net(BD)/ADV.Java(NC)</td>
                            </tr>
                            <tr>
                            </tr>
                            
                            <tr>
                                <td style={{ textAlign: "center" }}>Class/Lab location</td>
                                <td style={{ textAlign: "center" }}>LL1/LL5</td>
                                <td style={{ textAlign: "center" }}>LL1/LL5</td>
                                <td style={{ textAlign: "center" }}>118</td>
                                <td style={{ textAlign: "center" }}>118</td>
                                <td style={{ textAlign: "center" }}>LL4</td>
                            </tr>
                            
                            <tr>
                                <td style={{ textAlign: "center" }}>11:40 To 12:30</td>
                                <td colSpan={5} style={{ textAlign: "center" }}>LUNCH BREAK</td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: "center" }}>12:30 To 1:20</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(Lib) / DM(OD)/EC(RKI)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>React(NV)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(DS) / DM(Lib)/EC(Lib)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>AI/ML(CP)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>ADV.JAVA(MV)/ .Net(Lib)</td>
                            </tr>
                            
                            <tr>
                                <td style={{ textAlign: "center" }}>1:20 To 2:10</td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: "center" }}>Class / Lab location</td>
                                <td style={{ textAlign: "center" }}>214 / Elec.Machine Lab</td>
                                <td style={{ textAlign: "center" }}>LL5</td>
                                <td style={{ textAlign: "center" }}>214 / Elec.Machine Lab</td>
                                <td style={{ textAlign: "center" }}>LL5</td>
                                <td style={{ textAlign: "center" }}>LL5</td>
                            </tr>

                            <tr>
                                <td style={{ textAlign: "center" }}>12:30 To 1:20</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(Lib) / DM(OD)/EC(RKI)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>React(NV)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PD(Lib) / DM(OD)/EC(RKI)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>AI / ML (CP)</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>ADV.Java(MV) / .Net (lib)</td>
                            </tr>
                            <br />

                            <tr>
                                <td style={{ textAlign: "center" }}>Abbrevation</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>Subject Name and Code</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>Facuty Abbrevation</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>Faculty Name</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>TH / TU</td>
                                <td rowSpan={2} style={{ textAlign: "center" }}>PR</td>
                            </tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Timetable;
