import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
  
    return (
      <Map height={500} defaultCenter={[53.551086, 9.993682]} defaultZoom={11}>
        <Marker 
          width={50}
          anchor={[53.551086, 9.993682]} 
          color={color} 
          onClick={() => setHue(hue + 20)} 
        />
      </Map>
    )
  }

  export function MyMapSchool() {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
  
    return (
      <Map height={500} defaultCenter={[52.520008, 13.404954]} defaultZoom={11}>
        <Marker 
          width={50}
          anchor={[52.520008, 13.404954]} 
          color={color} 
          onClick={() => setHue(hue + 20)} 
        />
      </Map>
    )
  }

  export function MyMapVacation() {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
  
    return (
      <Map height={500} defaultCenter={[43.508133, 16.440193]} defaultZoom={11}>
        <Marker 
          width={50}
          anchor={[43.508133, 16.440193]} 
          color={color} 
          onClick={() => setHue(hue + 20)} 
        />
      </Map>
    )
  }

  export function MyMapCity() {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
  
    return (
      <Map height={500} defaultCenter={[43.508133, 16.440193]} defaultZoom={11}>
        <Marker 
          width={50}
          anchor={[43.508133, 16.440193]} 
          color={color} 
          onClick={() => setHue(hue + 20)} 
        />
      </Map>
    )
  }