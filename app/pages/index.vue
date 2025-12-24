<template>
    <div class="px-10 h-full flex flex-col items-center justify-center gap-4 -mt-10">
        <Image src="/img/stranger-detective/logo.png" class="mb-5" />
        <Button class="w-full" label="JOGAR COM DICAS" @click="navigateTo('/game/select-setup')" />
        <Button class="w-full" label="FICHA DE JOGO" @click="navigateTo('/ficha')" />
        <InstallButtonPWA />
    </div>
</template>
