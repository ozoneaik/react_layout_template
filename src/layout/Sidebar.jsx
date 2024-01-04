import '../assets/style/sidebar.css'
import '../assets/js/sidebar.js'
import UserImage from '../assets/image/user.jpg'
import {useEffect} from "react";
import $ from 'jquery'; // Import jQuery

export default function Sidebar(){
    useEffect(() => {
        function showSubMenu() {
            $(".menu > ul > li").click(function (e) {
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
                $(this).find("ul").slideToggle();
                $(this).siblings().find("ul").slideUp();
                $(this).siblings().find('ul').find('li').removeClass('active')
            });
        }
        showSubMenu();
        return () => {$(".menu > ul > li").off('click');};
    }, []);

    function showFullSideBar(){
        $(".menu-btn").click(function (){$('.sidebar').toggleClass('active')})
        return () => {$(".menu-btn").off('click');};
    }

    return (
        <div className={'sidebar active'}>
            <div className={'menu-btn'} onClick={()=>showFullSideBar()}>
                <i className={'ph-bold ph-caret-left'}></i>
            </div>
            <div className={'head'}>
                <div className={'user-img'}>
                    <img src={UserImage} alt="no image"/>
                </div>
                <div className={'user-details'}>
                    <p className={'title'}>web developer</p>
                    <p className={'name'}>ภูวเดช พาณิชยโสภา</p>
                </div>
            </div>
            <div className={'nav'}>
                <div className={'menu'}>
                    <p className={'title'}>เมนูหลัก</p>
                    <ul>
                        <li className={''}>
                            <a href="#">
                                <i className={'icon ph-bold ph-house-simple'}></i>
                                <span className={'text'}>แดชบอร์ด</span>
                            </a>
                        </li>
                        <li className={''}>
                            <a href="#">
                                <i className={'icon ph-bold ph-user'}></i>
                                <span className={'text'}>ผู้ชมเว็บไซต์</span>
                                <i className={'arrow ph-bold ph-caret-down'}></i>
                            </a>
                            <ul className={'sub-menu'}>
                                <li>
                                    <a href="#">
                                        <span className={'text'}>ผู้ใช้</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className={'text'}>ผู้ติดตาม</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={''}>
                            <a href="#">
                                <i className={'icon ph-bold ph-file-text'}></i>
                                <span className={'text'}>กระทู้</span>
                            </a>
                        </li>
                        <li className={''}>
                            <a href="#">
                                <i className={'icon ph-bold ph-calendar-blank'}></i>
                                <span className={'text'}>Income</span>
                                <i className={'arrow ph-bold ph-caret-down'}></i>
                            </a>
                            <ul className={'sub-menu'}>
                                <li><a href="#"><span className={'text'}>เงินเดือน</span></a></li>
                                <li><a href="#"><span className={'text'}>กองทุน</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={'menu'}>
                    <p className={'title'}>การตั้งค่า</p>
                    <ul>
                        <li className={''}>
                            <a href="#">
                                <i className={'icon ph-bold ph-gear'}></i>
                                <span className={'text'}>ตั้งค่า</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'menu'}>
                <p className={'title'}>บัญชี</p>
                <ul>
                    <li className={''}>
                        <a href="#">
                            <i className={'icon ph-bold ph-info'}></i>
                            <span className={'text'}>ช่วยเหลือ</span>
                        </a>
                    </li>
                    <li className={''}>
                        <a href="#">
                            <i className={'icon ph-bold ph-sign-out'}></i>
                            <span className={'text'}>ออกจากระบบ</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}