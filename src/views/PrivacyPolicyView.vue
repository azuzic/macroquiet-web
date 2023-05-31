// Vue.js component (NewPassword.vue)
<template>
    <div class="grow flex flex-col justify-between items-start pt-16 absolute overflow-y-auto">
        <div class="flex grow pb-8 flex-col | justify-center items-center bg-red | bg-opacity-30 p-2 | w-full">

            <MQ_h2 class="w-full" text="PRIVACY POLICY" :small="true"/>
            
            <MQ_ProfileBlock class="w-full max-w-4xl justify-center items-center flex flex-col px-10 py-4 text-xs sm:text-sm sm:px-6 | transition-all duration-500 text-justify">
                <div class="font-normal text-MQ_light mb-4 text-sm sm:text-base text-left">
                    Last Updated: <span class="text-MQ_green">29 May, 2023</span>
                </div>
                
                <div class="font-normal text-MQ_light">
                    At MacroQuiet, we understand the importance of protecting your privacy and maintaining the confidentiality of your personal 
                    information. We are committed to ensuring that any data you provide to us is treated securely and in accordance with applicable 
                    privacy laws and regulations. This Data Privacy Statement outlines our practices regarding the collection, use, and disclosure 
                    of your information when you visit our website.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Collection and Use of Personal Information:
                    </div>
                </MQ_h2_small>

                <div class="font-normal text-MQ_light">
                    We collect personal information from you when you voluntarily provide it to us, such as when you fill out forms, 
                    or interact with our website. This information may include your name, contact details, 
                    and any other information you choose to provide. We use this information to fulfill your requests, 
                    provide customer support, and improve our services.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Information Collected Automatically:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    When you visit our website, certain information is automatically collected, such as your IP address, browser type, 
                    operating system, and browsing behavior. This information helps us analyze trends, track user engagement, and improve the 
                    functionality and performance of our website.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Disclosure of Personal Information:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    We may disclose your personal information to trusted third-party service providers who assist us in operating our website, 
                    conducting business activities, or providing services to you. These third parties are obligated to maintain the confidentiality 
                    and security of your information and are prohibited from using it for any other purpose.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        International Data Transfers:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    If you are accessing our website from a location outside the country where our servers are located, your information may be 
                    transferred to and stored in a country with different data protection laws. By using our website, you consent to the transfer 
                    of your information to countries outside your country of residence.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Third-Party Sites:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the 
                    privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing 
                    any personal information.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Security of Personal Information:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    We implement technical and organizational measures to protect your personal information from unauthorized access, disclosure, 
                    alteration, or destruction. We regularly review and enhance our security practices to ensure the ongoing confidentiality, 
                    integrity, and availability of your information.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Retention of Personal Information:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with 
                    legal obligations, resolve disputes, and enforce our agreements. When personal information is no longer needed, we securely 
                    delete or anonymize it.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Children's Privacy Rights:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    Our website is not intended for children under the age of 10. We do not knowingly collect personal information from children. 
                    If we become aware that we have inadvertently collected personal information from a child, we will promptly take steps to 
                    delete that information.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Your Rights:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    You have certain rights regarding your personal information, which may include the right to access, correct, update, delete, 
                    or restrict its processing. You may also have the right to withdraw your consent and object to the processing of your information. 
                    To exercise these rights, please contact us using the information provided on our website.
                </div>

                <MQ_h2_small class="mt-4" text=" " :white="true">
                    <div class="text-sm sm:text-base md2:text-lg text-MQ_red">
                        Updates to our Privacy Policy:
                    </div>
                </MQ_h2_small>
                
                <div class="font-normal text-MQ_light">
                    We may update our Privacy Policy from time to time to reflect changes in our data practices or applicable laws. Any updates 
                    will be posted on our website, and the revised Privacy Policy will be effective immediately upon posting.
                </div>
            </MQ_ProfileBlock>
        </div>
        <MQ_footer/>
    </div>
</template>

<script>
import MQ_h2 from '@/components/Global/MQ_h2/MQ_h2.vue';
import MQ_h2_small from '@/components/Global/MQ_h2/MQ_h2_small.vue';
import MQ_footer from '@/components/App/MQ_footer.vue';
import MQ_ProfileBlock from '@/components/UserProfile/MQ_ProfileBlock.vue';


export default {
    name: "PrivacyPolicyView",
    components: { MQ_h2, MQ_footer, MQ_h2_small, MQ_ProfileBlock },
};
</script>