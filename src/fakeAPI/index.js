import react from 'react'
import { LoremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from 'uuid';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
const numOfSentence = 5
const numOfWords = 1
const generateRandomImg = (id,size) => `https://i.picsum.photos/id/${id}/${size}.jpg`

const recommendedId = [1,4,6]
const featuredId = 3
const generateValueSize = 7
const generateRandomData = () => {
  let data = []
  for(let n=1; n <= generateValueSize; n++) {
    const setRecommend = recommendedId.find(id => id === n) ? true : false
    const setFeature = featuredId === n ? true : false
    data.push({
      id:`d-id-${uuidv4()}`,
      title:lorem.generateWords(numOfWords),
      details:lorem.generateSentences(numOfSentence),
      img:generateRandomImg(520+n,'200/200'),
      isRecomended:setRecommend,
      isFeatured:setFeature
    })
  }
  return data
}

const bannerSize = 3
const generateBannerData = () => {
  const data = []
  for(let n=1; n <= bannerSize; n++) {
    data.push({
      id:`ob-id-${uuidv4()}`,
      title:`Banner ${n}`,
      content: lorem.generateSentences(numOfSentence)
    })
  }
  return data
}

const headerImagesSize = 3
const generateHeaderImages = () => {
  const data = []
  for(let n=1; n <= headerImagesSize; n++) {
    data.push({
      id:`hImg-id-${uuidv4()}`,
      img:generateRandomImg(201+n,'800/200'),
      title:lorem.generateWords(4),
      subtitle: lorem.generateSentences(1)
    })
  }
  return data
}

const dataList = generateRandomData()
const otherBanners = generateBannerData()
const headerImages = generateHeaderImages()

export {
  dataList,
  otherBanners,
  headerImages
}