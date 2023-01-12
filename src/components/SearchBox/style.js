import styled from 'styled-components'

export const SearchBoxWrapper = styled.div`
    .m-search-search-bar {
        height: 11.73333vw;
        padding: 0 3.2vw;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        .input-area {
            margin-top: 1.86667vw;
            height: 8vw;
            width: 82.4vw;
            line-height: 8vw;
            padding: 0 3.2vw;
            background: #f4f4f4;
            border-radius: 0.53333vw;
            display: inline-block;
            input {
                font-size: 3.46667vw;
                color: #505050;
                border: none;
                background: transparent;
                width: 61.33333vw;
            }
            .iconfont {
                color: #a0a0a0;
                vertical-align: sub;
            }
            .ic_search_tab {
                font-size: 5.33333vw;
            }
            .guanbi {
                font-size: 3.73333vw;
                float: right;
            }
        }
        .cancel {
            font-size: 4vw;
            color: #fb7299;
            float: right;
            line-height: 11.73333vw;
        }
    }
`