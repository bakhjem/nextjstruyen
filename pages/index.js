import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import { Helmet } from 'react-helmet';
import Layout from '../components/MyLayout'

export default class Index extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://3.1.203.88:8001/update?page=1')
    const json = await res.json()
    // console.log(json.data)
    return { mangalist: json.data }
  }

  render () {
    return (
      <Layout>
        <Helmet>
          <title>Đọc truyện online - YYtruyen.com</title>
          <meta name="description" content="Đọc truyện miễn phí, cập nhật nhanh nhất các truyện ngôn tình, truyện kiếm hiệp, xuyên không, sủng, ngược và nhiều thể loại khác" />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="đọc truyện, đọc truyện online, truyện ngôn tình, truyện kiếm hiệp, xuyên không" />
        </Helmet>
        <div id="main_body">
          <div className="cotgiua">
            <div className="cotgiua_menu">
              <Link
                as={`/update/1`}
                href={'/update/[page]'}
              >
                <a title="Truyện mới cập nhật"
                rel="nofollow"
                className="head_title actived muc_truyen_moi_cap_nhat">
                Truyện mới
                </a>
            </Link>
              <Link
                as={`/hot/1`}
                href={'/hot/[page]'}
                
              >
                <a title="TOP VIEW NOVEL"
                rel="nofollow"
                className="head_title">
                Truyện hot
                </a>
            </Link>
            </div>
            <div className="wrap_update home">
              <div className="daily-update">
                <h2 className="title update-title" title="Recently Updated MANGA">
                  Mới cập nhật
              </h2>
              </div>
              {this.props.mangalist.length !== 0 ?
                this.props.mangalist.map(mangalist => (
                  <div className="update_item">
                    <div className="update_image">
                      <Link
                        as={`/truyen/${mangalist.idnovel}`} href={`/truyen/[id]`}
                        // href={'/truyen/' + mangalist.idnovel}
                      ><a className="tooltip">
                        <img
                          src={mangalist.cover}
                          alt={mangalist.novelsname}
                        />
                        </a>
                      </Link>
                    </div>
                    <div className="nowrap">
                      <Link
                        as={`/truyen/${mangalist.idnovel}`} href={`/truyen/[id]`}
                        
                      >
                        <a className="tooltip" title={mangalist.novelsname}>
                        {mangalist.novelsname}
                        </a>
                      </Link>
                      {/* <em>43 minutes ago </em> */}
                    </div>
                    <Link
                      // to={'/novel/' + mangalist.idnovel + '/' + mangalist.idchapter}
                      as={`/doc/${mangalist.idnovel}/${mangalist.idchapter}`} href={`/doc/[id]/[chapter]`}
                      
                    >
                      <a title={mangalist.lasterchapter}
                      className="chapter">
                      {mangalist.lasterchapter}
                      </a>
                    </Link>
                    <br />
                    <span style={{ color: '#6f6f6f', fontSize: 13,paddingLeft: 10 }}>View: {mangalist.view}
                    </span>
                    <p>{mangalist.des}</p>
                  </div>
                )) : null}
              <Link as={'/update/1'} href={`/update/[page]`} ><a title="More" className="xemthem" rel="nofollow">Xem thêm</a></Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}