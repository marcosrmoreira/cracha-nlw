const LinksSocialMedia = {
  youtube: 'rocketseat',
  github:  'marcosrmoreira',
  facebook: 'marcosrosario.moreira',
  instagram: 'marcosmoreira.r',
  twitter: 'marcosrmoreira_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()


function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    Bio.textContent = data.bio
    userPhoto.src = data.avatar_url
  })
}

getGithubProfileInfos()
