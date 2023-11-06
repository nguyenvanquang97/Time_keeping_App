
export const goScreen = (navigation: any, screenName: string, params: any, oncallback: (e: any) => void) => {
    navigation.navigate(screenName, { mycallback: oncallback, customParam: params });
};