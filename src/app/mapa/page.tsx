// // src/Mapa.tsx
// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import CompanyForm from '../cadastroEmpresa/page';
// import listaCandidato from '../listaCandidatos/page';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// interface MapaProps {
//   companyEndereco: string;
//   candidatos: { latitude: number, longitude: number, nome: string }[];
// }

// const Mapa: React.FC<MapaProps> = ({ companyEndereco, candidatos }) => {
//   const [center, setCenter] = useState({ lat: -23.550520, lng: -46.633308 }); // São Paulo por padrão
//   const [markers, setMarkers] = useState<{ lat: number, lng: number, label: string }[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       const geocoder = new window.google.maps.Geocoder();
      
//       // Geocodificando o endereço da empresa
//       geocoder.geocode({ address: companyEndereco }, (results, status) => {
//         if (status === 'OK' && results[0]) {
//           const companyLocation = {
//             lat: results[0].geometry.location.lat(),
//             lng: results[0].geometry.location.lng(),
//           };
//           setCenter(companyLocation); // Centraliza no endereço da empresa
          
//           // Criando os marcadores para a empresa e os candidatos
//           const allMarkers = [
//             { ...companyLocation, label: 'Empresa' },
//             ...candidatos.map((candidate) => ({
//               lat: candidate.latitude,
//               lng: candidate.longitude,
//               label: candidate.nome,
//             })),
//           ];
//           setMarkers(allMarkers);
//           setLoading(false);
//         } else {
//           console.error('Erro ao geocodificar o endereço da empresa:', status);
//           setLoading(false);
//         }
//       });
//     };

//     fetchCoordinates();
//   }, [companyEndereco, candidatos]);

//   if (loading) {
//     return <div>Carregando mapa...</div>;
//   }

//   return (
//     <LoadScript googleMapsApiKey="SUA_CHAVE_DE_API_AQUI">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         {markers.map((marker, index) => (
//           <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} label={marker.label} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Mapa;
