declare module '@alptugidin/react-circular-progress-bar' {
  import React from 'react'

  type SignPosition = 'start' | 'end'
  type StrokeLineCap = 'butt' | 'round' | 'square'
  type FlatShape = 'full' | 'threequarters' | 'half'
  type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter'

  interface FlatSx {
    strokeColor: string
    bgStrokeColor?: string
    bgColor?: { value: string; transparency: string }
    barWidth: number
    shape?: FlatShape
    strokeLinecap?: StrokeLineCap
    valueSize?: number
    valueWeight?: FontWeight
    valueColor?: string
    valueFamily?: string
    textSize?: number
    textWeight?: FontWeight
    textColor?: string
    textFamily?: string
    loadingTime?: number
    miniCircleColor?: string
    miniCircleSize?: number
    valueAnimation?: boolean
    intersectionEnabled?: boolean
  }

  export interface IFlat {
    progress: number
    range?: { from: number; to: number }
    text?: string
    sign?: { value: string; position: SignPosition }
    showValue?: boolean
    showMiniCircle?: boolean
    sx: FlatSx
  }

  export interface IHeat {
    progress: number
    range?: { from: number; to: number }
    showValue?: boolean
    sign?: { value: string; position: SignPosition }
    showMiniCircle?: boolean
    text?: string
    revertBackground?: boolean
    sx: {
      barWidth: number
      bgColor: string
      shape?: 'threequarters' | 'half'
      strokeLinecap?: StrokeLineCap
      valueSize?: number
      valueWeight?: FontWeight
      valueColor?: string
      valueFamily?: string
      textSize?: number
      textWeight?: FontWeight
      textColor?: string
      textFamily?: string
      loadingTime?: number
      miniCircleColor?: string
      valueAnimation?: boolean
      intersectionEnabled?: boolean
    }
  }

  export interface INested {
    circles: [
      circle1: { value: number; text: string; color: string },
      circle2: { value: number; text: string; color: string },
      circle3?: { value: number; text: string; color: string },
      circle4?: { value: number; text: string; color: string },
      circle5?: { value: number; text: string; color: string }
    ]
    sx: {
      bgColor: string
      strokeLinecap?: StrokeLineCap
      fontFamily?: string
      fontWeight?: FontWeight
      loadingTime?: number
      valueAnimation?: boolean
      intersectionEnabled?: boolean
    }
  }

  export const Flat: React.FC<IFlat>
  export const Heat: React.FC<IHeat>
  export const Nested: React.FC<INested>
}
