// Disco ball
"use client"
import React, { useRef } from 'react'

import scene from '../public/3D/disco_ball.glb'
import { useGLTF } from '@react-three/drei'
import { Group, Object3DEventMap } from 'three'

type Props = {}

const Disco = (props: Props) => {
    const group = useRef<Group<Object3DEventMap>> ();
    const { nodes, materials } = useGLTF(scene);



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="afbef698da0848eda397b08d9734c84ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="DiscoBall">
                  <mesh
                    name="DiscoBall_lambert1_0"
                    geometry={nodes.DiscoBall_lambert1_0.geometry}
                    material={materials.lambert1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Disco