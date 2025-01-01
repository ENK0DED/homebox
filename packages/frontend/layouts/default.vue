<template>
  <div>
    <!--
    Confirmation Modal is a singleton used by all components so we render
    it here to ensure it's always available. Possibly could move this further
    up the tree
   -->
    <ModalConfirm />
    <ItemCreateModal v-model="modals.item" />
    <LabelCreateModal v-model="modals.label" />
    <LocationCreateModal v-model="modals.location" />
    <AppToast />

    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <SidebarMenuButton
                    size="lg"
                    :class="{ 'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground': dropdownOpen }"
                    @click="toggleDropdown"
                  >
                    <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <GalleryVerticalEnd class="size-4" />
                    </div>
                    <div class="flex flex-col gap-0.5 leading-none">
                      <span class="font-semibold">Documentation</span>
                      <span>v{{ selectedVersion }}</span>
                    </div>
                    <ChevronsUpDown class="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  v-if="dropdownOpen"
                  class="w-[--radix-dropdown-menu-trigger-width]"
                  align="start"
                >
                  <DropdownMenuItem
                    v-for="version in data.versions"
                    :key="version"
                    @click="setSelectedVersion(version)"
                  >
                    v{{ version }}
                    <Check v-if="version === selectedVersion" class="ml-auto" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>

          <form @submit.prevent>
            <SidebarGroup class="py-0">
              <SidebarGroupContent class="relative">
                <Label for="search" class="sr-only">Search</Label>
                <SidebarInput
                  id="search"
                  v-model="search"
                  placeholder="Search the docs..."
                  class="pl-8"
                />
                <Search class="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup v-for="item in data.navMain" :key="item.title">
            <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="subItem in item.items" :key="subItem.title">
                  <SidebarMenuButton :class="{ 'is-active': subItem.isActive }" as-child>
                    <a :href="subItem.url">{{ subItem.title }}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <div class="drawer-content justify-center bg-base-300 pt-20 lg:pt-0">
          <AppHeaderDecor class="-mt-10 hidden lg:block" />
          <!-- Button -->
          <div class="navbar z-[99] lg:hidden top-0 fixed bg-primary shadow-md drawer-button">
            <label for="my-drawer-2" class="btn btn-square btn-ghost text-base-100 drawer-button lg:hidden">
              <Icon name="mdi:menu" class="h-6 w-6" />
            </label>

            <NuxtLink to="/home">
              <h2 class="text-3xl font-bold tracking-tight text-base-100 flex">
                HomeB
                <AppLogo class="w-8 -mb-3" />
                x
              </h2>
            </NuxtLink>
          </div>

          <slot />
        </div>
      </SidebarInset>
    </SidebarProvider>

    <!-- <div class="drawer drawer-mobile">
      <input id="my-drawer-2" v-model="drawerToggle" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content justify-center bg-base-300 pt-20 lg:pt-0">
        <AppHeaderDecor class="-mt-10 hidden lg:block" />
        <div class="navbar z-[99] lg:hidden top-0 fixed bg-primary shadow-md drawer-button">
          <label for="my-drawer-2" class="btn btn-square btn-ghost text-base-100 drawer-button lg:hidden">
            <Icon name="mdi:menu" class="h-6 w-6" />
          </label>
          <NuxtLink to="/home">
            <h2 class="text-3xl font-bold tracking-tight text-base-100 flex">
              HomeB
              <AppLogo class="w-8 -mb-3" />
              x
            </h2>
          </NuxtLink>
        </div>

        <slot></slot>
      </div>

      <div class="drawer-side shadow-lg">
        <label for="my-drawer-2" class="drawer-overlay"></label>

        <div class="w-60 py-5 md:py-10 bg-base-200 flex flex-grow-1 flex-col">
          <div class="space-y-8">
            <div class="flex flex-col items-center gap-4">
              <p>Welcome, {{ username }}</p>
              <NuxtLink class="avatar placeholder" to="/home">
                <div class="bg-base-300 text-neutral-content rounded-full w-24 p-4">
                  <AppLogo />
                </div>
              </NuxtLink>
            </div>
            <div class="flex flex-col bg-base-200">
              <div class="mx-auto w-40 mb-6">
                <div class="dropdown overflow visible w-40">
                  <label tabindex="0" class="btn btn-primary btn-block text-lg text-no-transform">
                    <span>
                      <Icon name="mdi:plus" class="mr-1 -ml-1" />
                    </span>
                    Create
                  </label>
                  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                    <li v-for="btn in dropdown" :key="btn.name">
                      <button @click="btn.action">
                        {{ btn.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <ul class="flex flex-col mx-auto gap-2 w-40 menu">
                <li v-for="n in nav" :key="n.id" class="text-xl" @click="unfocus">
                  <NuxtLink
                    v-if="n.to"
                    class="rounded-btn"
                    :to="n.to"
                    :class="{
                      'bg-secondary text-secondary-content': n.active?.value,
                    }"
                  >
                    <Icon :name="n.icon" class="h-6 w-6 mr-4" />
                    {{ n.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <button class="mt-auto mx-2 hover:bg-base-300 p-3 rounded-btn" @click="logout">Sign Out</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { useLabelStore } from "~~/stores/labels";
import { useLocationStore } from "~~/stores/locations";

const username = computed(() => authCtx.user?.name || "User");

// Preload currency format
useFormatCurrency();

const modals = reactive({
  item: false,
  location: false,
  label: false,
  import: false,
});

const dropdown = [
  {
    name: "Item / Asset",
    action: () => {
      modals.item = true;
    },
  },
  {
    name: "Location",
    action: () => {
      modals.location = true;
    },
  },
  {
    name: "Label",
    action: () => {
      modals.label = true;
    },
  },
];

const route = useRoute();

const drawerToggle = ref();

function unfocus() {
  // unfocus current element
  drawerToggle.value = false;
}

const nav = [
  {
    icon: 'mdi:home',
    active: computed(() => route.path === "/home"),
    id: 0,
    name: "Home",
    to: "/home",
  },
  {
    icon: 'mdi:file-tree',
    id: 4,
    active: computed(() => route.path === "/locations"),
    name: "Locations",
    to: "/locations",
  },
  {
    icon: 'mdi:magnify',
    id: 3,
    active: computed(() => route.path === "/items"),
    name: "Search",
    to: "/items",
  },
  {
    icon: 'mdi:account',
    id: 1,
    active: computed(() => route.path === "/profile"),
    name: "Profile",
    to: "/profile",
  },
  {
    icon: 'mdi:cog',
    id: 6,
    active: computed(() => route.path === "/tools"),
    name: "Tools",
    to: "/tools",
  },
];

const labelStore = useLabelStore();

const locationStore = useLocationStore();

// onServerEvent(ServerEvent.LabelMutation, () => {
//   labelStore.refresh();
// });

// onServerEvent(ServerEvent.LocationMutation, () => {
//   locationStore.refreshChildren();
//   locationStore.refreshParents();
//   locationStore.refreshTree();
// });

// onServerEvent(ServerEvent.ItemMutation, () => {
//   // item mutations can affect locations counts
//   // so we need to refresh those as well
//   locationStore.refreshChildren();
//   locationStore.refreshParents();
// });

const authCtx = useAuthContext();
const api = useUserApi();

async function logout() {
  await authCtx.logout(api);
  navigateTo("/");
}




const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        { title: 'Installation', url: '#' },
        { title: 'Project Structure', url: '#' },
      ],
    },
    {
      title: 'Building Your Application',
      url: '#',
      items: [
        { title: 'Routing', url: '#' },
        { title: 'Data Fetching', url: '#', isActive: true },
        { title: 'Rendering', url: '#' },
        { title: 'Caching', url: '#' },
        { title: 'Styling', url: '#' },
        { title: 'Optimizing', url: '#' },
        { title: 'Configuring', url: '#' },
        { title: 'Testing', url: '#' },
        { title: 'Authentication', url: '#' },
        { title: 'Deploying', url: '#' },
        { title: 'Upgrading', url: '#' },
        { title: 'Examples', url: '#' },
      ],
    },
    {
      title: 'API Reference',
      url: '#',
      items: [
        { title: 'Components', url: '#' },
        { title: 'File Conventions', url: '#' },
        { title: 'Functions', url: '#' },
        { title: 'next.config.js Options', url: '#' },
        { title: 'CLI', url: '#' },
        { title: 'Edge Runtime', url: '#' },
      ],
    },
    {
      title: 'Architecture',
      url: '#',
      items: [
        { title: 'Accessibility', url: '#' },
        { title: 'Fast Refresh', url: '#' },
        { title: 'Next.js Compiler', url: '#' },
        { title: 'Supported Browsers', url: '#' },
        { title: 'Turbopack', url: '#' },
      ],
    },
  ],
}

const selectedVersion = ref(data.versions[0])
const dropdownOpen = ref(false)
const search = ref('')

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function setSelectedVersion(version: string) {
  selectedVersion.value = version
}
</script>
