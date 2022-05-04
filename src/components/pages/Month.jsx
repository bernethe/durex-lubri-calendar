import React, {useState} from 'react'
import moment from 'moment'
import St0 from '../../assets/img/st0.png'
import St1 from '../../assets/img/st1.png'
import St2 from '../../assets/img/st2.png'
import St3 from '../../assets/img/st3.png'
import St4 from '../../assets/img/st4.png'

const CellDay = ({dayInCicle, keyDay=33, children}) => {
    // console.log(keyDay+' - '+children);
    // 0=menstr, 1=seco, 2=lub, 3=xtralub, 4=pegajoso
    const _statusImg = [St0, St1, St2, St3, St4];
    const _ciclo = [0,0,0,0,0,1,1,1,3,3,3,3,2,2,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1];

    const _currentStat = children !== undefined && _ciclo[dayInCicle];
    
    return children !== undefined ? <td className={ `text-xs w-8 h-12 ${ children < keyDay ? 'bg-primary-light/50' : 'bg-primary-light' } border-secondary-dark border-4 align-top relative` }>
        <span className='absolute left-1 top-1'>{children}</span>
        <img src={_statusImg[_currentStat]} alt="" />
    </td> : <td></td>
}

const Month = ({myDate}) => {

    moment.updateLocale('es', {
        months : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort : ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        weekdays : ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        weekdaysShort : ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    });

    // console.log(moment(myDate, 'YYYY-MM-DD').toDate());

    const weekDayShort = moment.weekdaysShort();
    const firstDayOfMonth = moment(myDate).startOf('month').format('d');
    const finalDayOfMonth = moment(myDate).daysInMonth();
    const _ciclo = [0,0,0,0,0,1,1,1,3,3,3,3,2,2,4,4,4,1,1,1,1,1,1,1,1,1,1,1];
    let blankDays = [];

    for (let i = 0; i < moment(myDate).day(); i++) {
        blankDays.push(<CellDay key={'b_'+i} myDate={myDate}></CellDay>);
    }

    let daysInMonth = [];

    for (let i = 0; i <= _ciclo.length; i++) {
        let _dayInCicle = Number(moment(myDate).format('D'))+i-1;

        _dayInCicle = _dayInCicle >= finalDayOfMonth ? _dayInCicle-finalDayOfMonth : _dayInCicle;

        daysInMonth.push(<CellDay key={'c_'+i} dayInCicle={i} keyDay={moment(myDate).date()}>{_dayInCicle+1}</CellDay>);
    }

    let totalDays = [...blankDays, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalDays.forEach((row, i) => {
        if ((i % 7) !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalDays.length - 1) {
            rows.push(cells);
        }
    });

    return <table className='table-fixed mx-auto w-full max-w-[660px] bg-secondary-dark border-4 border-secondary-dark'>
        <thead>
            <tr>
                <th colSpan='7'>{moment(myDate).format('MMMM')}</th>
            </tr>
            <tr>{weekDayShort.map((day) => <th key={day}>{day}</th>)}</tr>
        </thead>
        <tbody>
            {
                rows.map((d, i) => d.length !== 0 && <tr key={'cd_'+i}>{d}</tr>)
            }
        </tbody>
    </table>
}

export default Month