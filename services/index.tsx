import request, { gql } from "graphql-request"

export const getCarsList=async()=>{
    const query = gql`

        query CarLists {
            carLists {
              carAvg
              createdAt
              id
              name
              price
              publishedAt
              updatedAt
              carType
              brand
              image {
                url
              }
            }
          }
    `
    const result = await request('https://api-ap-south-1.hygraph.com/v2/clscu6ar90e8801wjdcscces8/master',query)
    return result
}
