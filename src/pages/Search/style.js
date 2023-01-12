import styled from 'styled-components'
import style from '@/assets/global-style'

export const Container = styled.div`
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: ${props => props.play > 0 ? '3rem' : 0};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    /* background: #f2f3f4; */
    /* transform-origin 更改一个元素变形的原点 */
    transform-origin: right bottom;
    /* CSSTransition 过度类型给children */
    &.fly-enter,&.fly-appear{
        opacity: 0;
        /* 3d写z轴 启动 GPU 加速 */
        transform: translate3d(100%,0,0);
    }
    /* active 正在进行时 */
    &.fly-enter-active,&.fly-appear-active{
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0,0,0);
    }
    &.fly-exit{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active{
        opacity: 0;
        transform: all .3s;
        transform: translate3d(100%,0,0);
    }
`

export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 2rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
    .m-search-suggest {
        padding-left: 3.2vw;
        background: #f4f4f4;
        padding-top: 1vw;
        max-height: 50vh;
        li {
            height: 11.73333vw;
            line-height: 11.73333vw;
            border-bottom: 1px solid #ccc;
            color: #212121;
            font-size: 3.46667vw;
            .suggest_high_light {
                color: #fb7299;
                font-style: normal;
            }
        }
    }
    .m-search-hot {
        padding: 6.4vw 3.2vw;
        .title {
            color: #999;
            font-size: 3.73333vw;
            font-weight: 400;
        }
        .list {
            height: 24.53333vw;
            overflow: hidden;
            .hotword-item {
                display: inline-block;
                font-size: 3.46667vw;
                height: 9.06667vw;
                line-height: 8.8vw;
                padding: 0 3.2vw;
                color: #505050;
                border: 1px solid #ccc;
                border-radius: 4.53333vw;
                margin-right: 2.66667vw;
                margin-top: 3.2vw;
            }
        }
    }
    .m-search-history {
        border-top: 2.66667vw solid #f4f4f4;
        font-size: 0;
        .title {
            height: 12.26667vw;
            padding-left: 3.2vw;
            line-height: 12.26667vw;
            font-weight: 400;
            color: #999;
            font-size: 3.73333vw;
        }
        .history-list {
            padding-left: 3.2vw;
            li {
                height: 11.73333vw;
                line-height: 11.73333vw;
                border-bottom: 1px solid #ccc;
            }
             a {
                color: #505050;
                font-size: 3.73333vw;
                vertical-align: unset;
                padding-left: 0.4rem;
            }
        }
        .clear-history {
            height: 12.26667vw;
            line-height: 12.26667vw;
            text-align: center;
            a {
                font-size: 3.73333vw;
                color: #999;
            }
        }
    }
`

// 为了更好的复用
// 样式组件可提供 可复用样式
export const HotKey = styled.div`
    margin: 0 1rem 1rem 1rem;
    .title{
        padding-top: 1.75rem;
        font-size: ${style['font-size-m']};
        color: ${style['font-color-desc-v2']};
    }
    .item{
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0 1rem 0.5rem 0;
        border-radius: 0.3rem;
        background: ${style["highlight-background-color"]};
        font-size: ${style['font-size-m']};
        color: ${style['font-color-desc']};
    }
`

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;    
`

export const List = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    overflow: hidden;
    .title{
        margin: 0.5rem 0 0.5rem 0.5rem;
        color: ${style["font-color-desc"]};
        font-size: ${style["font-size-s"]};
    }
`

export const ListItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin: 0 0.25rem;
    padding: 0.25rem 0;
    align-items: center;
    border-bottom: 1px solid ${style["border-color"]};
    .img_wrapper{
        margin-right: 1rem;
        img{
            border-radius: 0.15rem;
            width: 2.5rem;
            height: 2.5rem;
        }
    }
    .name{
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
        font-weight: 500;
    }
`
export const SongItem = styled.div`
    >li{
        display: flex;
        height: 3rem;
        align-items: center;
        .index{
            width: 3rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
        }
        .info{
            box-sizing: border-box;
            flex: 1;
            display: flex;
            height: 100%;
            padding: 0.25rem 0;
            flex-direction: column;
            justify-content: space-around;
            border-bottom: 1px solid ${style['border-color']};
            >span:first-child{
                color: ${style['font-color-desc']};
            }
            >span:last-child{
                font-size: ${style['font-size-s']};
                color: #bba8a8;
            }
        }
    }
`