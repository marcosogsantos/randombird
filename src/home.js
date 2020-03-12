import React, { Component } from 'react';
import Linkify from 'react-linkify';
import "./bootstrap.css"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      input_url:undefined,
      tweets:[],
      aux_tweets_length:0,
      loading:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChanges = this.handleInputChanges.bind(this)
  }
  
  componentDidMount() {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    const user = params.get('user')
    if(user){
      this.getArticleText(user)
    }    
  }

  handleInputChanges(e){
    this.setState({input_url:e.target.value})
  }

  handleSubmit(e){
    this.setState({loading:true})
    this.get_random_tweet(this.state.input_url)
    e.preventDefault();
  }

  get_random_tweet(url) {
    let final_url = 'https://get-random-tweet-api.herokuapp.com/?user='+url
    fetch(final_url, {
      method: 'GET',
    })
    .then((response)=> response.json())
    .then((responseJson) => {
      this.setState({
        tweets:[responseJson].concat(this.state.tweets),
        loading:false,
      })
    })
    .catch((err) => console.log(err))
  }

  t_builder(){
    return (
      this.state.tweets.map((v,k)=>{
        return (
        <div className='card p-3 shadow-sm mt-1' key={k}>
          <a target='blank_' href={'https://twitter.com/' + v.user}>@{v.user}</a>
          <div>
            <Linkify>
              {v.text}
            </Linkify>
          </div>
          <div style={{fontSize:14}}>
          <span style={{color:"grey"}}>{v.date} </span>
            <span style={{color:"grey"}}>Retweets: {v.retweets} </span>
            <span style={{color:"grey"}}>Likes: {v.favorites} </span>
            <a target="_blank" href={v.link}> Go to tweet</a>
          </div>
        </div>)
      })
    )
  }

  loading_builder(){
    if (this.state.loading){
      return (
        <div class="ml-2 spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
      return (
        <div className='container'>
          <div style={{fontSize:45,fontFamily:'Pacifico, cursive', left:-8, position:"relative"}} className='title mt-5 text-left col'>Random Bird</div>
          <div style={{fontSize:14,top:-10,color:'grey'}} className='col sub-title d-block'>by <a target="blank_" href="https://twitter.com/marcosogsantos">@marcosogsantos</a></div>
          <div className='row mt-2'>
            <div className='col form-class m-0 pr-0'>
              <form className='form-inline'onSubmit={this.handleSubmit} style={{maxWidth:700}}>
                <div className='row container-fluid '>
                  <div className='col-sm-6 text-center m-0 pr-0'>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                      </div>
                      <input placeholder="username" className="d-inline form-control" type="text" value={this.state.input_url} onChange={this.handleInputChanges} required/>
                    </div>
                  </div>
                  <div style={{}} className='col-sm-3 m-0 p-0 text-center'>
                    <button type="submit"  style={{whiteSpace:'nowrap'}} class="btn ml-2 btn-primary">Get some tweet</button>
                  </div>
                  <div className='loading col-sm text-center mt-1'>
                    {this.loading_builder()}
                  </div>
                </div>
              </form>
              <div className='m-3'> 
                {this.t_builder()}
              </div>
            </div>
          </div>          
        </div>
      )
  }}