import Layout from '../../../components/MyLayout'
import 'isomorphic-unfetch'
import Link from 'next/link'
import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Helmet } from 'react-helmet';

export default class Chapter extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            prechap:'',
            nextchap:''
        }
    }
    
    static async getInitialProps(context) {
        // eslint-disable-next-line no-undef
        const { id, chapter } = context.query
        const res = await fetch(`http://3.1.203.88:8001/chapter?novelid=${id}&chapterid=${chapter}`)
        // const res1 = await fetch(`http://3.1.203.88:8001/novel?id=${id}`)
        const json = await res.json()
        // const json1 = await res1.json();
        // let prechap = '', nextchap = ''
        // if (json1.chapterlist.length === 1) {
        //     return { novelchapter: json, prechap: '', nextchap: '' }
        // } else {
        //     for (let i = 0; i < json1.chapterlist.length; i++) {
        //         if (
        //             json.idchapter ===
        //             json1.chapterlist[i].idchapter
        //         ) {
        //             if (i === 0) {
        //                 return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }

        //             }
        //             if (i > 0 && i < json1.chapterlist.length - 1) {
        //                 return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }
        //             }
        //             if (i === json1.chapterlist.length - 1) {
        //                 return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }
        //             }
        //         }
        //     }
        // }
        // console.log(json)
        return { novelchapter: json }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.novelchapter !== prevProps.novelchapter){
            fetch(`http://3.1.203.88:8001/novel?id=${this.props.novelchapter.idnovels}`)
            .then(r => r.json())
            .then(data => {
                if (data.chapterlist.length === 1) {
                    this.state({prechap:'',nextchap:''})
                } else {
                    for (let i = 0; i < data.chapterlist.length; i++) {
                        if (
                            this.props.novelchapter.idchapter ===
                            data.chapterlist[i].idchapter
                        ) {
                            if (i === 0) {
                                this.setState({prechap:'',nextchap: data.chapterlist[i + 1].idchapter})
                                // return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }
        
                            }
                            if (i > 0 && i < data.chapterlist.length - 1) {
                                this.setState({prechap:data.chapterlist[i - 1].idchapter,nextchap: data.chapterlist[i + 1].idchapter})
                                // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }
                            }
                            if (i === data.chapterlist.length - 1) {
                                this.setState({prechap:data.chapterlist[i - 1].idchapter,nextchap:''})
                                // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }
                            }
                        }
                    }
                }
            });
        }
    }
    
    componentDidMount() {
        fetch(`http://3.1.203.88:8001/novel?id=${this.props.novelchapter.idnovels}`)
            .then(r => r.json())
            .then(data => {
                if (data.chapterlist.length === 1) {
                    this.state({prechap:'',nextchap:''})
                } else {
                    for (let i = 0; i < data.chapterlist.length; i++) {
                        if (
                            this.props.novelchapter.idchapter ===
                            data.chapterlist[i].idchapter
                        ) {
                            if (i === 0) {
                                this.setState({prechap:'',nextchap: data.chapterlist[i + 1].idchapter})
                                // return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }
        
                            }
                            if (i > 0 && i < data.chapterlist.length - 1) {
                                this.setState({prechap:data.chapterlist[i - 1].idchapter,nextchap: data.chapterlist[i + 1].idchapter})
                                // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }
                            }
                            if (i === data.chapterlist.length - 1) {
                                this.setState({prechap:data.chapterlist[i - 1].idchapter,nextchap:''})
                                // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }
                            }
                        }
                    }
                }
            });
    }
    

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <Layout>
                <Helmet>
                    <title>{`Đọc ${this.props.novelchapter.chaptername}`} - YYtruyen</title>
                    <meta name="description" content={`Đọc truyện ${this.props.novelchapter.chaptername} online free tại yytruyen.com, cập nhật các chương mới nhất của truyện này tại đây nhé`} />
                    <meta name="theme-color" content="#008f68" />
                    <meta name="keywords" content="đọc truyện online, truyện online, truyện ngôn tình, truyện kiếm hiệp, truyện ngược, sủng" />
                </Helmet>
                <div className="breadcrumb breadcrumbs breadcrumbs_doc">
                    <div className="rdfa-breadcrumb">
                        <div>
                            <p>
                                <span className="breadcrumbs-title" />
                                <span>
                                    <Link href="/"  >
                                        <a className="home" title="Đọc truyện online">
                                            Đọc truyện online
                    </a>
                                    </Link>
                                </span>
                                <span className="separator">»</span>
                                <span>
                                    <Link
                                        as={`/truyen/${this.props.novelchapter.idnovels}`}
                                        href={`/truyen/[id]`}
                                    >
                                        <a className="home">
                                            {this.props.novelchapter.novelsname}
                                        </a>
                                    </Link>
                                </span>
                                <span className="separator">»</span>{" "}
                                {this.props.novelchapter.chaptername}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="menu_doc" style={{ flexDirection: 'row', padding: 10 }}>
                    <Link
                        as={`/truyen/${this.props.novelchapter.idnovels}`}
                        href={`/truyen?id=${this.props.novelchapter.idnovels}`}>
                        <a style={{ color: 'white' }}>
                            <button color="primary" style={{ margin: 5 }}>
                                Danh sách chương
            </button>
                        </a>
                    </Link>
                    {this.state.prechap !== "" && (
                        <Link

                            // className="btn_theodoi btn_doc"
                            as={`/doc/${this.props.novelchapter.idnovels}/${this.state.prechap}`}
                            href={`/doc/[id]/[chapter]`}
                        >
                            <a rel="nofollow"
                                style={{ color: 'white' }}>
                                <button style={{ margin: 5 }}>
                                    Chương trước
              </button>
                            </a>
                        </Link>
                    )}
                    {this.state.nextchap !== "" && (

                        <Link

                            // className="btn_theodoi btn_doc"
                            as={`/doc/${this.props.novelchapter.idnovels}/${this.state.nextchap}`}
                            href={`/doc/[id]/[chapter]`}
                        >
                            <a rel="nofollow"
                                style={{ color: 'white' }}>
                                <button color="primary" style={{ margin: 5 }}>
                                    Chương sau
              </button>
                            </a>
                        </Link>
                    )}
                </div>
                <div className="hentry">
                    <h1 className="name_chapter entry-title">{this.props.novelchapter.chaptername}</h1>
                    <div className="entry-content">
                        <div id="vung_doc" className="vung_doc">
                            {this.props.novelchapter.content !== undefined ?
                                ReactHtmlParser(this.props.novelchapter.content)
                                : null
                            }
                        </div>

                    </div>
                    <div className="menu_doc" style={{ flexDirection: 'row', padding: 10 }}>
                        <Link
                            as={`/truyen/${this.props.novelchapter.idnovels}`}
                            href={`/truyen/[id]`}>
                            <a style={{ color: 'white' }} >
                                <button color="primary" style={{ margin: 5 }}>
                                    Danh sách chương
            </button>
                            </a>
                        </Link>
                        {this.state.prechap !== "" && (
                            <Link

                                // className="btn_theodoi btn_doc"
                                as={`/doc/${this.props.novelchapter.idnovels}/${this.state.prechap}`}
                                href={`/doc/[id]/[chapter]`}
                            >
                                <a rel="nofollow"
                                    style={{ color: 'white' }}>
                                    <button color="primary" style={{ margin: 5 }}>
                                        Chương trước
              </button>
                                </a>
                            </Link>
                        )}
                        {this.state.nextchap !== "" && (

                            <Link

                                // className="btn_theodoi btn_doc"
                                as={`/doc/${this.props.novelchapter.idnovels}/${this.state.nextchap}`}
                                href={`/doc/[id]/[chapter]`}
                            >
                                <a rel="nofollow"
                                    style={{ color: 'white' }}>
                                    <button color="primary" style={{ margin: 5 }}>
                                        Chương sau
              </button>
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </Layout>
        )
    }
}
