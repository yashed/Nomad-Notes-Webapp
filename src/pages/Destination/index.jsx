import React from 'react';
import Navbar from '../../layout/navbar';
import Footer from '../../layout/footer';

import { Button, Img, SelectBox, Text } from '../../comp';

const allTypesOptionsList = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' }
];
const mostPopularOptionsList = [
    { label: 'Option1', value: 'option1' },
    { label: 'Option2', value: 'option2' },
    { label: 'Option3', value: 'option3' }
];

const DestinationPage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-start w-full mx-auto bg-gray-50 font-urbanist">
                <div className="h-[897px] md:px-5 relative w-full">
                    <Img
                        className="h-[897px] m-auto object-cover w-full"
                        src="images/destination/img_image14.png"
                        alt="imageFourteen"
                    />
                    <Navbar />
                </div>
                <div className="flex flex-col items-start mt-20 md:px-10 sm:px-5 px-[104px] w-full">
                    <div className="flex flex-col items-start justify-start w-auto gap-12 md:w-full">
                        <div className="border border-gray-500 border-solid flex flex-row gap-2.5 h-[78px] md:h-auto items-center justify-between max-w-[912px] md:px-10 sm:px-5 px-[46px] py-[21px] rounded-[39px] w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-center text-gray-500_01 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24">
                                Search for places
                            </Text>
                            <Img
                                className="w-8 h-8"
                                src="images/destination/img_search_indigo_a400.svg"
                                alt="search_One"
                            />
                        </div>
                        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col items-start justify-start w-auto gap-4 sm:w-full">
                                <Text
                                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                                    size="txtUrbanistRomanMedium24Black900">
                                    Filter by type of place
                                </Text>
                                <SelectBox
                                    className="font-medium h-[78px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                                    placeholderClassName="text-black-900"
                                    indicator={
                                        <Img
                                            className="h-7 w-7"
                                            src="images/destination/img_arrowdown.svg"
                                            alt="arrow_down"
                                        />
                                    }
                                    isMulti={false}
                                    name="frameEightyOne"
                                    options={allTypesOptionsList}
                                    isSearchable={false}
                                    placeholder="All Types"
                                    shape="round"
                                    color="gray_500"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto gap-4 sm:w-full">
                                <Text
                                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                                    size="txtUrbanistRomanMedium24Black900">
                                    Sort by
                                </Text>
                                <SelectBox
                                    className="font-medium h-[78px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                                    placeholderClassName="text-black-900"
                                    indicator={
                                        <Img
                                            className="h-7 w-7"
                                            src="images/destination/img_arrowdown.svg"
                                            alt="arrow_down"
                                        />
                                    }
                                    isMulti={false}
                                    name="frameEightyTwo"
                                    options={mostPopularOptionsList}
                                    isSearchable={false}
                                    placeholder="Most Popular"
                                    shape="round"
                                    color="gray_500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:gap-10 gap-20 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start max-w-[1520px] min-h-[auto] mt-[119px] mx-auto md:px-5 w-full">
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame17.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image10.png"
                                alt="imageTen"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Asia
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                China
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame19.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image11.png"
                                alt="imageEleven"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Africa
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Namibia
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div className="bg-black-900 h-[452px] relative rounded-[32px] w-full">
                            <Img
                                className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image9.png"
                                alt="imageNine"
                            />
                            <Img
                                className="absolute h-[452px] inset-[0] justify-center m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image12.png"
                                alt="imageTwelve"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Australia
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Victoria
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame17.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image10_452x490.png"
                                alt="imageTen"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Europe
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Denmark
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame19.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image11_452x490.png"
                                alt="imageEleven"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Caribbean
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Dominican Republic
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div className="bg-black-900 h-[452px] relative rounded-[32px] w-full">
                            <Img
                                className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image9.png"
                                alt="imageNine"
                            />
                            <Img
                                className="absolute h-[452px] inset-[0] justify-center m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image12_452x490.png"
                                alt="imageTwelve"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Canada
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Ontario
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame17.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image10_1.png"
                                alt="imageTen"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Africa
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Nigeria
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame19.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image11_1.png"
                                alt="imageEleven"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Europe
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Greece
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div className="bg-black-900 h-[452px] relative rounded-[32px] w-full">
                            <Img
                                className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image9.png"
                                alt="imageNine"
                            />
                            <div className="absolute h-[452px] inset-[0] justify-center m-auto rounded-[32px] w-full">
                                <Img
                                    className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                    src="images/destination/img_image12_1.png"
                                    alt="imageTwelve"
                                />
                                <Img
                                    className="absolute h-[452px] inset-[0] justify-center m-auto object-cover rounded-[32px] w-full"
                                    src="images/destination/img_image15.png"
                                    alt="imageFifteen"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Asia
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Japan
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame17.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image10_2.png"
                                alt="imageTen"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                South America
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Brazil
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div
                            className="bg-black-900 bg-cover bg-no-repeat flex flex-col h-[452px] items-center justify-start rounded-[32px] w-full"
                            style={{
                                backgroundImage: "url('images/destination/img_frame19.png')"
                            }}>
                            <Img
                                className="h-[452px] md:h-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image11_2.png"
                                alt="imageEleven"
                            />
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                North America
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Hawaii
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start flex-1 w-full gap-7">
                        <div className="bg-black-900 h-[452px] relative rounded-[32px] w-full">
                            <Img
                                className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                src="images/destination/img_image9.png"
                                alt="imageNine"
                            />
                            <div className="absolute h-[452px] inset-[0] justify-center m-auto rounded-[32px] w-full">
                                <Img
                                    className="h-[452px] m-auto object-cover rounded-[32px] w-full"
                                    src="images/destination/img_image12_1.png"
                                    alt="imageTwelve"
                                />
                                <Img
                                    className="absolute h-[452px] inset-[0] justify-center m-auto object-cover rounded-[32px] w-full"
                                    src="images/destination/img_image16.png"
                                    alt="images/destinationixteen"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                            <Text
                                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                                size="txtUrbanistRomanMedium24Gray700">
                                Middle East
                            </Text>
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                                size="txtUrbanistRomanBold36">
                                Jordan
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-8 items-center justify-start mt-[188px] md:px-5 w-auto sm:w-full">
                    <Img
                        className="w-8 h-8"
                        src="images/destination/img_arrowleft.svg"
                        alt="arrowleft"
                    />
                    <div className="flex flex-row items-start justify-start w-auto gap-4 sm:flex-col sm:w-full">
                        <Button
                            className="cursor-pointer font-bold h-[57px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[58px]"
                            shape="round"
                            color="indigo_A400"
                            variant="fill">
                            1
                        </Button>
                        <Button
                            className="cursor-pointer font-medium h-[57px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[58px]"
                            shape="round">
                            2
                        </Button>
                        <Button
                            className="cursor-pointer font-medium h-[57px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[58px]"
                            shape="round">
                            3
                        </Button>
                        <Button
                            className="cursor-pointer font-medium h-[57px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[58px]"
                            shape="round">
                            4
                        </Button>
                        <Button className="flex items-center justify-center w-[58px]" shape="round">
                            <Img src="images/destination/img_frame76.svg" alt="frameSeventySix" />
                        </Button>
                        <Button
                            className="cursor-pointer font-medium h-[57px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[58px]"
                            shape="round">
                            50
                        </Button>
                    </div>
                    <Img
                        className="w-8 h-8"
                        src="images/destination/img_materialsymbol.svg"
                        alt="materialsymbol"
                    />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default DestinationPage;
