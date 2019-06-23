var http = require('http')
var config = require('config')

module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState) {
  
  // var hit = http.getUrl(config.get('remote.url') + 'hits/searchByRecipeId');
  // var score = http.getUrl(config.get('remote.url') + 'score/searchByRecipeId');
  // var comments = http.getUrl(config.get('remote.url') + 'comment/searchByRecipeId');
  
  
  return {
    ingredients: recipeCommitState.ingredients,
    recipeBasicStructures : [recipeBasicStructure],
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType: 'LARGE'
  }
}