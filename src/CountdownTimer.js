import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../node_modules/animate.css/animate.min.css';
class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: {
                months: '',
                days: '',
                h: '',
                m: '',
                s: ''
            },
            startDate: new moment(),
            min: new Date(),
            startTimer: false
        }
        this.tick = this.tick.bind(this);
    }
    loadInterval = null;
    componentDidMount() {
        this.loadInterval = setInterval(this.tick, 1000)
    }

    componentWillUnmount () {
        this.loadInterval && clearInterval(this.loadInterval);
        // this.loadInterval = false;
    }

    tick() {
        if (typeof this.props.endDate  === typeof new Date()) {
            this.afterEachSecond(this.props.endDate);
        }
    }
    duration = '';
    afterEachSecond(endDate){
        var temp = {months: '', days: '', h: '', m: '', s: ''};
        var now = moment(); // today's date
        var end = moment(endDate); // end date
        this.duration = moment.duration(end.diff(now));
        if(this.duration.asSeconds()>1) {
            if (this.duration.asMonths() >= 1) {
                if (Math.floor(this.duration.asMonths()) < 10) { temp.months = '0'+ Math.floor(this.duration.asMonths())} else {temp.months = Math.floor(this.duration.asMonths())}
                if (Math.floor(this.duration.days()) < 10) { temp.days = '0'+ Math.floor(this.duration.days())} else {temp.days = Math.floor(this.duration.days())}
                if (Math.floor(this.duration.hours()) < 10) { temp.h = '0'+ Math.floor(this.duration.hours())} else {temp.h = Math.floor(this.duration.hours())}
                if (Math.floor(this.duration.minutes()) < 10) { temp.m = '0'+ Math.floor(this.duration.minutes())} else {temp.m = Math.floor(this.duration.minutes())}
                if (Math.floor(this.duration.seconds()) < 10) { temp.s = '0'+ Math.floor(this.duration.seconds())} else {temp.s = Math.floor(this.duration.seconds())}
            }
            else if (this.duration.asDays() >= 1 && this.duration.asMonths() < 1) {
                if (Math.floor(this.duration.asDays()) < 10) { temp.days = '0'+ Math.floor(this.duration.asDays())} else {temp.days = Math.floor(this.duration.asDays())}
                if (Math.floor(this.duration.hours()) < 10) { temp.h = '0'+ Math.floor(this.duration.hours())} else {temp.h = Math.floor(this.duration.hours())}
                if (Math.floor(this.duration.minutes()) < 10) { temp.m = '0'+ Math.floor(this.duration.minutes())} else {temp.m = Math.floor(this.duration.minutes())}
                if (Math.floor(this.duration.seconds()) < 10) { temp.s = '0'+ Math.floor(this.duration.seconds())} else {temp.s = Math.floor(this.duration.seconds())}
            }
            else if (this.duration.asDays() < 1) {
                // console.log('working!')
                if (Math.floor(this.duration.hours()) < 10) { temp.h = '0'+ Math.floor(this.duration.hours())} else {temp.h = Math.floor(this.duration.hours())}
                if (Math.floor(this.duration.minutes()) < 10) { temp.m = '0'+ Math.floor(this.duration.minutes())} else {temp.m = Math.floor(this.duration.minutes())}
                if (Math.floor(this.duration.seconds()) < 10) { temp.s = '0'+ Math.floor(this.duration.seconds())} else {temp.s = Math.floor(this.duration.seconds())}
            }
        }

        this.setState({
            timeRemaining: temp
        })
    }
    render() {
        return (


            <div className="timer">
                <div className="timer-inner">
                    {
                        this.state.timeRemaining.months &&
                        <div className="days">
                            <h3>{this.state.timeRemaining.months}</h3>
                            <p>Months</p>
                        </div>
                    }{
                        this.state.timeRemaining.days &&
                        <div className="days">
                            <h3>{this.state.timeRemaining.days}</h3>
                            <p>Days</p>
                        </div>
                    }{
                    this.state.timeRemaining.h &&
                    <div className="hours">
                        <h3>{this.state.timeRemaining.h}</h3>
                        <p>Hours</p>
                    </div>
                }{
                    this.state.timeRemaining.m  &&
                    <div className="mins">
                        <h3>{this.state.timeRemaining.m}</h3>
                        <p>Minutes</p>
                    </div>
                }{
                    this.state.timeRemaining.s &&
                    <div className="secs">
                        <h3>{this.state.timeRemaining.s}</h3>
                        <p>Seconds</p>
                    </div>
                }
                </div>
            </div>

            // <div className="header-countdown">
            //     {/*{*/}
            //         {/*this.state.timeRemaining.months &&*/}
            //         {/*<div className="col-md-2 vcenter1">*/}
            //             {/*<div className="int1"><span>{this.state.timeRemaining.months}</span><span className="mins">months</span></div>*/}
            //         {/*</div>*/}
            //     {/*}*/}
            //     {
            //         this.state.timeRemaining.days &&
            //         <div className="col-md-2 vcenter1">
            //             <div className="int2"><div className="ineteg-value">{this.state.timeRemaining.days}</div><div className="secs">Days</div></div>
            //         </div>
            //     } {
            //         this.state.timeRemaining.h &&
            //         <div className="col-md-2 vcenter2">
            //             <div className="int"><div className="ineteg-value intv0"> {this.state.timeRemaining.h}</div><div className="days">Hours</div></div>
            //         </div>
            //     } {
            //         this.state.timeRemaining.m  &&
            //         <div className="col-md-2 vcenter3">
            //             <div className="int1"><div className="ineteg-value intv1">{this.state.timeRemaining.m}</div><div className="mins">Minutes</div></div>
            //         </div>
            //     } {
            //         this.state.timeRemaining.s &&
            //         <div className="col-md-2 vcenter1">
            //             <div className="int2"><div className="ineteg-value intv2">{this.state.timeRemaining.s}</div><div className="secs">Seconds</div></div>
            //         </div>
            //     }
            //     <div className="clearfix"></div>
            // </div>
        )
    }
}
CountdownTimer.propTypes = {
    // endDate: PropTypes.object.isRequired
}
export default CountdownTimer;