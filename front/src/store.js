const state = {
  keywords: 'cute cat',
  gifs: []
}
const mutations = {
  changeKeywords (state, keywords) {
    state.keywords = keywords
  },
  changeGifs (state, gifs) {
    state.gifs = gifs.data
  }
}
const actions = {
  changeKeywords (context, keywords) {
    context.commit('changeKeywords', {keywords})
  },
  search (context, keyword) {
    const params = encodeURIComponent(keyword).replace(/%20/g, '+');
    fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=dc6zaTOxFJmzC`).then((res) => {
      res.json().then((json) => {
        context.commit('changeGifs', json)
      })
    })
  }
}
const getter = {
}

export default {
  state,
  mutations,
  actions,
  getter
}