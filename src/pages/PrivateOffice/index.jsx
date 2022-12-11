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
import KOL_TOR from '../../img/kol_tor.png'
import ADD from "../../img/btn_add.svg"
import Calendar_btn from "../../img/btn_calendar.svg"
import Delete from '../../img/delete.svg'
import Supara from '../../img/supara.png'
import PLUS from '../../img/plus.svg'
import PLUS_ADD from "../../img/plus-circle.svg"
import IMAGE from "../../img/blog_img.png"
import Add_plus from "../../img/pencil.svg"
import Background from "../../img/profile_background.png"

const StyledWeekView = styled.div`
    display: inline-grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    `;

    const Title = styled.h3`
    grid-area: 1 / span 3;
    `;

    export function PrivateOffice(props) {
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
            <img src={Background} alt="" />
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

<div className={calen.blogs1}>
<div className={calen.padding}>
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

        <div className={calen.mini_card}>
            <div className={calen.mini_card__img}>
                <img className={calen.image_card} src={KOL_TOR} alt="kol-tor" />
            </div>
            <div className={calen.mini_card__right}>
                <p className={calen.mini_card__title}>Kol-Tor</p>
                <button className={calen.level} href="">
                    Hard
                </button>
                <div className={calen.tags}>
                    <div className={calen.tag}>#mountains</div>
                    <div className={calen.tag}>#lakes</div>
                </div>
            </div>
        </div>

        <div className={calen.buttons}>
            <button className={calen.btn_add}><img className={calen.btn_add__img} src={ADD} alt="img" />Add note</button>
            <div className={calen.calendar_delete}>
                <img className={calen.calendar_btn} src={Calendar_btn} alt="calendar-btn" />
                <div className={calen.between_arrow}></div>
                <img className={calen.delete} src={Delete} alt="delete" />
            </div>
        </div>

        <div className={calen.mini_card}>
            <div className={calen.mini_card__img}>
                <img className={calen.image_card} src={Supara} alt="kol-tor" />
            </div>
            <div className={calen.mini_card__right}>
                <p className={calen.mini_card__title}>Supara</p>
                <button className={calen.level} href="">
                    Hard
                </button>
                <div className={calen.tags}>
                    <div className={calen.tag}>#mountains</div>
                    <div className={calen.tag}>#lakes</div>
                </div>
            </div>
        </div>

        <div className={calen.buttons}>
            <button className={calen.btn_add}><img className={calen.btn_add__img} src={ADD} alt="img" />Add note</button>
            <div className={calen.calendar_delete}>
                <img className={calen.calendar_btn} src={Calendar_btn} alt="calendar-btn" />
                <div className={calen.between_arrow}></div>
                <img className={calen.delete} src={Delete} alt="delete" />
            </div>
        </div>

        <button className={calen.btn_add__destination}><img className={calen.btn_add__img} src={PLUS} alt="img" />Add destination</button>
        </div>
        </div>
        </div>


        <div className={calen.content_right}>
            <div className={calen.content_header}>
                <p className={calen.content_right__title}>Your Blogs</p>
                <img src={PLUS_ADD} alt="" />
            </div>


            <div className={calen.blogs_cards}>
                <div className={calen.blog_card}>
                <div className={calen.padding}>
                    <img className={calen.blog_img} src={IMAGE} alt="" />
                    <p className={calen.blog_description}>How I climbed to Ala-Too mountains</p>
                    <div className={calen.blog_edit} ><img src={Add_plus} alt="" /></div>
                </div>
        </div>


        <div className={calen.blog_card}>
                <div className={calen.padding}>
                    <img className={calen.blog_img} src={IMAGE} alt="" />
                    <p className={calen.blog_description}>How I climbed to Ala-Too mountains</p>
                    <div className={calen.blog_edit} ><img src={Add_plus} alt="" /></div>
                </div>
        </div>


        <div className={calen.blog_card}>
                <div className={calen.padding}>
                    <img className={calen.blog_img} src={IMAGE} alt="" />
                    <p className={calen.blog_description}>How I climbed to Ala-Too mountains</p>
                    <div className={calen.blog_edit} ><img src={Add_plus} alt="" /></div>
                </div>
        </div>

            </div>

            
        </div>
        </div>
        
        </div>
    );
    }
