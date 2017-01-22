const debug = process.env.NODE_ENV !== 'production'

const state = {
  memos: [{
    id: 1,
    title: 'hoge',
    date: '2000-10-10',
    tag: [
        'hoge',
        'fuga'
    ]
  }]
}

const util = {
  // memos の中から id が一致するメモの index を返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    return memos.findIndex((memo) => {
          return memo.id === targetId
        })
  }
}

const mutations = {
  addMemo (newMemo) {
    newMemo.id = state.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
    state.memos.push(newMemo)
  },
  removeMemo(id) {
    // memos の中から id が一致するメモの index を取得する
    const index = util.findIndex(state.memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo(memo) {
    // memos の中から id が一致するメモの index を返す
    const index = util.findIndex(state.memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

export default {
  state,
  mutations
}