import React from "react";
import {BlurMask, Canvas, Circle, Group, LinearGradient, mix, Path, Skia, useDerivedValue, useTiming, vec} from "@shopify/react-native-skia";
import {centredPointHeight, centredPointWidth, centeredLogo, centeredOval} from "../constants"

const oval = Skia.Path.Make();
oval.addOval(centeredOval)

const FlowerLogo = () => {
    const progress = useTiming({ to: 2}, {duration: 1000})
    const transformLeft = useDerivedValue(
        () => [{ rotate: mix(progress.current, 0, Math.PI / 3) }, {scale: -1}],
        [progress],
    );
    const transformRight = useDerivedValue(
        () => [{ rotate: mix(progress.current, 0, -Math.PI / 3) }, {scale: -1}],
        [progress],
    );

    return (
        <Canvas style={{flex: 3}}>
            <Group>
                <LinearGradient
                    start={vec(centredPointWidth - 50, centredPointHeight - 100)}
                    end={vec(centredPointWidth + 50, centredPointHeight + 100)}
                    colors={["#B3446C", "#DE5D83", "#B3446C"]}
                />
                <BlurMask blur={10} style="inner"/>
                <Path path={oval} end={1000}/>
                <Group
                    transform={transformRight}
                    origin={centeredLogo}>
                    <Path path={oval}/>
                </Group>
                <Group
                    transform={transformLeft}
                    origin={centeredLogo}>
                    <Path path={oval}/>
                </Group>
                <Circle c={centeredLogo} r={40} color="white">
                    <BlurMask blur={20} style="inner"/>
                </Circle>
            </Group>
        </Canvas>
    );
};

export default FlowerLogo;

