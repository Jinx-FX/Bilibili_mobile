import styled from "styled-components"

export const SpaceWrapper = styled.div`
    background: #fff;
    font-size: 0px;
    margin-top:11.73333vw;
`
export const SpaceInfo = styled.div`
    background: #fff;
    font-size: 0px;
    
    .banner{
        width: 100vw;
        height: 24vw;
        overflow: hidden;
        background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/bannerTop_new.png) 50% center/cover;
    }
    .part1{
        padding: 0 3.2vw;
        .face{
            float: left;
            position: relative;
            width: 22.4vw;
            height: 22.4vw;
            .avatar{
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                margin-top: -1.6vw;
            }
        }
        .relation{
            float: right;
            width: 58.66667vw;
            padding-top: 2.13333vw;
            color: #e7e7e7;
            .count{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                justify-content: space-around;
                &>span {
                    width: 19.2vw;
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    .num{
                        font-size: 3.73333vw;
                        color: #212121;
                        line-height: 4.26667vw;
                    }
                    .type{
                        font-size: 2.93333vw;
                        color: #999;
                    }
                }
                .split{
                    vertical-align: middle;
                    width: 1px;
                    height: 4.26667vw;
                    background: #e7e7e7;
                }
            }
            .follow-btn{
                display: block;
                button{
                    width: 100%;
                    display: block;
                    height: 8vw;
                    border: none;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    border-radius: 1.06667vw;
                    font-size: 3.73333vw;
                    margin-top: 3.2vw;
                    outline: none;
                    &.white{
                        background: #fff;
                        border: 1px solid #fb7299;
                        color: #fb7299;
                    }
                }
            }
        }
    }
    .part2{
        clear: both;
        padding: 3.2vw;
        .base{
            .name{
                font-size: 4.8vw;
                color: #212121;
                max-width: 62.66667vw;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
            .gender{
                margin-left: 1.06667vw;
                display: inline-block;
                vertical-align: middle;
                padding-top: 0.53333vw;
            }
            .level{
                margin-left: 1.6vw;
                vertical-align: middle;
                i{  
                    color: #FF0000;
                    font-size: 6.4vw;
                    vertical-align: middle;
                }
            }
        }
        .desc{
            clear: both;
            .content {
                margin-top: 2.13333vw;
                font-size: 3.46667vw;
                color: #999;
                /* line-height: 4.53333vw; */
                /* width: 83.46667vw; */
                width: 93vw;
                /* height: 4.53333vw; */
                /* overflow: hidden; */
                /* text-overflow: ellipsis; */
                /* white-space: nowrap; */
                /* float: left; */
                a{
                    text-decoration: none;
                }
                .spread {
                    height: auto;
                    white-space: normal;
                    word-break: break-all;
                }
            }
            .spread-btn {
                margin-top: 1.86667vw;
                float: right;
                font-size: 3.46667vw;
                color: #1389bf;
                text-decoration: none;
                }
        }
        .clearfloat {
            clear: both;
        }
    }
    .iconfont {
    font-family: iconfont!important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`

export const TabsBar = styled.div`
    height: 10.66667vw;
    line-height: 10.66667vw;
    padding-left: 3.2vw;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
    span {
        display: inline-block;
        margin-right: 8.53333vw;
        color: #757575;
        font-size: 3.46667vw;
        &.on {
            color: #fb7299;
        }
    }
    
`

export const ListWrapper = styled.div`
padding-left: 3.2vw;
background: #fff;
a{
    color: inherit;
    cursor: default;
    text-decoration: none;
    &.video-item-space {
        position: relative;
        height: 24.26667vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        padding: 2.4vw 3.2vw 2.4vw 0;
        .cover {
            float: left;
            width: 31.2vw;
            height: 19.46667vw;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                border-radius: 1.06667vw;
            }
            .bfs-img[data-v-be935d08] {
                background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/loading.png) no-repeat 50%;
                background-size: contain;
                background-color: #e7e7e7;
                -o-object-fit: cover;
                object-fit: cover;
            }
            .duration {
                position: absolute;
                right: 1.06667vw;
                bottom: 1.06667vw;
                font-size: 3.2vw;
                padding: 0 0.53333vw;
                color: #fff;
                border-radius: 0.53333vw;
                background: rgba(0,0,0,.5);
            }
        }
        .info {
            position: relative;
            margin-left: 34.4vw;
            height: 19.46667vw;
            .title {
            font-size: 3.73333vw;
            color: #212121;
            line-height: 4.53333vw;
            font-weight: 400;
            max-height: 9.06667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            }
            .state {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                font-size: 2.66667vw;
                color: #999;
                line-height: 4.53333vw;
                height: 4.53333vw;
                &>span {
                    display: inline-block;
                }
                i{
                    margin-right: 1.06667vw;
                    vertical-align: middle;
                }
                .danmaku {
                    margin-left: 7.73333vw;
                }
            }
        }
    }
}
`