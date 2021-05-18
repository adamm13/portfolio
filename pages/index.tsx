import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services }  from '../data'

const index = () => {
  // console.log('CLIENT:', services) <-----client dom side rendering

  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        i am currently fsdfsdf sdf sd fsd fs df sd fs df sd f sd fsdfsdfkshdljshfksjdhf sdf sd fs dfksjdhfksdjfhs
        sdkfslkdfjhsdjkfhsdkf dfsjdfhsldkjfhdlskfjhsd fsdf sldfhsdkjfhsdlfsjhdfk sdfskdfhsdf s dfsdfskldjfh'
        </h5>
        <div className="p-4 mt-5 bg-gray-400">
          <h6> What I offer</h6>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map(service => (
              <ServiceCard service={service}/>
              ))}
          </div>
        </div>
    </div>
  )
}

export default index;

// export const getServerSideProps = async (
//   context:GetServerSidePropsContext
//   ) => {
//   // calculation 

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }

// export const getStaticProps = async (
//   context:GetStaticPropsContext
//   ) => {
//   // calculation 

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   // console.log("server", services)  <---- server side rendering

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }
