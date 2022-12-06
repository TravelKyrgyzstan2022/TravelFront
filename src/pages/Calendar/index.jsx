import { useRef } from "react";
import styled from "styled-components";
import { useCalendarState } from "@react-stately/calendar";
import { useCalendar, useCalendarGrid } from "@react-aria/calendar";
import { useLocale, useDateFormatter } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CalendarCell } from "../../components/CalendarCell";
import { CalendarButton } from '../../components/CalendarButton'
import calen from './index.module.css';
import Ava from '../../img/ava.svg';
import FACE_ASK from '../../img/ask_face.svg'

const StyledWeekView = styled.div`
    display: inline-grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    `;

    const Title = styled.h3`
    grid-area: 1 / span 3;
    `;

    export function Calendar(props) {
    let { locale } = useLocale();
    let state = useCalendarState({
        ...props,
        visibleDuration: { weeks: 1 },
        locale,
        createCalendar
    });
    let ref = useRef();
    let { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
        props,
        state,
        ref
    );
    let { gridProps } = useCalendarGrid(props, state);

    let startDate = state.visibleRange.start;

    let dateFormatter = useDateFormatter({
        dateStyle: "long",
        calendar: startDate.calendar.identifier
    });

    return (
        <div className={calen.container}>
            <div className={calen.content}>
                <div className={calen.content_left}>
                    <div className={calen.user}>
                        <div className={calen.user_header}>
                            <img className={calen.ava} src={Ava} alt="ava" />
                            <div className={calen.user_title}>
                            <h4 className={calen.title}>George Michael</h4>
                            <a href=""className={calen.link}>georgemichael@gmail.com</a>
                            </div>
                        </div>
                        <div className={calen.btn_ask__manager}>
                        <button className={calen.btn}><img className={calen.btn_img} src={FACE_ASK} alt="img" />Ask manager support</button>
                        </div>
                    </div>
                </div>
            </div>


        <StyledWeekView {...calendarProps} ref={ref}>
        <Title>
            {dateFormatter.formatRange(
            state.visibleRange.start.toDate(state.timeZone),
            state.visibleRange.end.toDate(state.timeZone)
            )}
        </Title>
        <CalendarButton {...prevButtonProps}>
            <ChevronLeftIcon style={{ width: 20, height: 20 }} />
        </CalendarButton>
        <table {...gridProps}>
            <tbody>
            <tr>
                {state
                .getDatesInWeek(0)
                .map((date, i) =>
                    date ? (
                    <CalendarCell key={i} state={state} date={date} />
                    ) : (
                    <td key={i} />
                    )
                )}
            </tr>
            </tbody>
        </table>
        <CalendarButton {...nextButtonProps}>
            <ChevronRightIcon style={{ width: 20, height: 20 }} />
        </CalendarButton>
        </StyledWeekView>
        </div>
    );
    }
