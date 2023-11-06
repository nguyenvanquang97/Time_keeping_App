import React, { Children, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TextStyle, GestureResponderEvent, TouchableOpacity } from 'react-native';
import Icon, { IconSource } from 'react-native-paper/src/components/Icon';
import FText from '../Text/FText';
interface ListTitle {
    iconLeft?: IconSource | any,
    iconLeft2?: IconSource | any,
    titleLeft?: string,
    titleRight?: string,
    drive?: boolean | any,
    iconRight?: IconSource | any,
    position?: 'right' | 'left',
    subTile?: string,
    mode?: 1 | 2;
    style?: ViewStyle;
    contentTitle?: string,
    childrenLeft?: ReactNode | any;
    childrenRight?: ReactNode | any;

}

const ListTitle: React.FC<ListTitle> = ({
    titleLeft,
    iconLeft,
    titleRight,
    iconRight,
    position,
    subTile,
    mode,
    style,
    contentTitle,
    drive,
    childrenLeft,
    childrenRight

}) => {
    const check = (childrenLeft && childrenRight && true) || (childrenLeft === undefined && childrenRight === undefined && true)
    return (
        <View>
            {mode === 2 ? (

                <View style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,

                }, style]}>
                    {childrenLeft &&
                        <View style={[styles.view1,]}>
                            {childrenLeft}
                        </View>
                    }


                    <View style={[styles.view3, { alignItems: check ? 'center' : (childrenLeft ? ('flex-end') : 'flex-start') }]}>
                        <FText textStyle={subTile ? 'Title3' : 'Title5'}>{contentTitle}</FText>
                        {subTile !== undefined && <FText textStyle='Subtitle3'>{subTile}</FText>}
                    </View>
                    {childrenRight &&
                        <View style={styles.view2} >
                            {childrenRight}
                        </View>
                    }

                </View>
            ) : (
                <View>
                    {position !== 'left' ? (
                        <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                            borderBottomWidth: drive && 2,
                            borderBlockColor: '#F3F3F3'
                        }, style]}>
                            <View style={styles.view1}>
                                {iconLeft !== undefined &&
                                    <TouchableOpacity onPress={iconLeft.props.onPress} style={{ marginHorizontal: 5 }}>{iconLeft}</TouchableOpacity>
                                }
                                <View style={{ marginLeft: 5 }}>
                                    <FText textStyle={subTile ? 'Title3' : 'Title4'}>{titleLeft}</FText>
                                    {subTile !== undefined && <FText textStyle='Subtitle3'>{subTile}</FText>}
                                </View>

                            </View>

                            {((titleRight !== undefined) || (iconRight !== undefined)) &&
                                <View style={[styles.view2]}>
                                    <TouchableOpacity style={{
                                        flexDirection: 'row', justifyContent: 'flex-end', padding: 5, alignItems: 'center',
                                    }} onPress={iconRight.props.onPress}>
                                        {titleRight !== undefined && <FText textStyle='ButonText2' >{titleRight}</FText>}
                                        {iconRight !== undefined &&
                                            <View style={{ marginHorizontal: 6, alignItems: 'center' }}>{iconRight}</View>
                                        }
                                    </TouchableOpacity>
                                </View>

                            }

                        </View>
                    ) : (
                        <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,

                        }, style]}>
                            <TouchableOpacity style={styles.view1} onPress={iconRight.props.onPress}>
                                {titleRight !== undefined && <FText textStyle='ButonText2' >{titleRight}</FText>}

                                {iconRight !== undefined &&
                                    <View style={{ marginHorizontal: 5 }}>{iconRight}</View>
                                }
                            </TouchableOpacity>


                            <View style={styles.view2}>

                                <View style={{ marginHorizontal: 5 }} >
                                    <FText textStyle={subTile ? 'Title3' : 'Title4'}>{titleLeft}</FText>
                                    {subTile !== undefined && <FText textStyle='Subtitle3'>{subTile}</FText>}
                                </View>
                                {iconLeft !== undefined &&
                                    <View style={{ marginHorizontal: 5 }}>{iconLeft}</View>
                                }
                            </View>

                        </View>
                    )}
                </View>
            )}
        </View>

    );
};
const styles = StyleSheet.create({
    view1: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    view3: {
        flex: 1,
        alignItems: 'center',
        padding: 5,

    },
    view2: {
        flex: 1,

        justifyContent: 'flex-end',
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',

    },
});
export default ListTitle;
