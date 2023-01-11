import styled from "styled-components"

export const CommentWrapper = styled.li`
    clear: both;
    padding: 3.2vw;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
    .comment-item-openapp {
        display: block;
        position: relative;
        .head {
            float: left;
            position: relative;
            margin-top: 0.53333vw;
            .avatar {
                float: left;
                width: 8vw;
                height: 8vw;
                border-radius: 50%;
            }
            .official {
                position: absolute;
                right: -1px;
                bottom: -1px;
                width: 3.2vw;
                height: 3.2vw;
            }
        }
        .detail {
            margin-left: 12vw;
            .name {
                font-size: 3.46667vw;
                color: #757575;
            }
            .like {
                float: right;
                font-size: 2.66667vw;
                color: ${props => props.action ? "#fb7299" : "#999"};
                margin-top: 1.86667vw;
                i{
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
            }
            .time {
                display: inline-block;
                margin-top: 1.86667vw;
                font-size: 3.2vw;
                height: 3.2vw;
                line-height: 3.2vw;
                color: #999;
            }
            .content {
                margin-top: 2.4vw;
                font-size: 3.46667vw;
                color: #212121;
                white-space: pre-line;
                word-break: break-word;
            }
        }
        .launch-app-btn {
            display: inline-block;
            position: relative;
        }
        .m-subpreview-openapp {
            display: block!important;
        }
        .m-sub-reply-preview {
            margin-left: 12vw;
            margin-top: 2.66667vw;
            background: #f4f4f4;
            padding: 2.66667vw;
            border-radius: 1.06667vw;
            .sub-preview-item {
                color: #212121;
                margin: 1.6vw 0 0;
                font-size: 3.46667vw;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                :first-child {
                    margin-top: 0;
                }
                a {
                    color: #5090cc;
                }
                a,span{
                    vertical-align: middle;
                    text-decoration: none;
                    word-break: break-all;
                }
            }
            .show-more {
                display: block;
                margin-top: 2.13333vw;
                font-size: 3.2vw;
                color: #5090cc;
                i {
                    vertical-align: text-top;
                }
            }
        }
    }
    .bfs-img[data-v-be935d08] {
    background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/loading.png) no-repeat 50%;
    background-size: contain;
    background-color: #e7e7e7;
    -o-object-fit: cover;
    object-fit: cover;
}
`
