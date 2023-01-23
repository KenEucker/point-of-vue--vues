<div>
    <!-- use values defined in the vue component json -->
    <h1 class="text-xl">{{ vue.name }}</h1>
    <!-- use veriables defined in the script -->
    <h3>{{vuesHeading}}</h3>
    <!-- use variables from the query -->
    <div v-for="vue in query.vues">
        <span>{{ vue.name }}</span>
    </div>
    <h3>{{imagesHeading}}</h3>
    <!-- Use tailwind classes -->
    <div class="grid grid-cols-2">
        <!-- Use vue directives -->
        <div v-for="image in query.images">
            <img :src="image.link" class="rounded-l"/>
        </div>
    </div>
</div>
